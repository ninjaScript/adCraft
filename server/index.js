const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')
const session = require('express-session');
const passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();
const multer = require("multer");
const app = express();
app.use(express.static(__dirname + '/../client/public'));
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// configration MySqlStore to save the sessions;
var options = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "adCraft"
};
// create object of mysqlstore and pass the option and we want to edit the session config
var sessionStore = new MySQLStore(options)


// configration session
app.use(session({
  secret: 'ahhsjdhakasfhbasjkfhsakfsahf',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// POST request for sign-up.


app.post('/sign-up', function (req, res) {
  console.log("User", req.body);
  var user = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "phoneNumber": req.body.phoneNumber,
    "password": req.body.password,
    "gender": req.body.gender,
    "id_roles": req.body.id_roles,
    "createdAt": db.formatDate()
  }
  // check if the account exist or not 
  db.isAccountExist(user.phoneNumber, function (err, result) {
    if (err) {
      console.log("error in check ", err)
    } else {
      if (result.length === 0) {
        db.insertAccount(user, function (err, result) {
          if (err) {
            console.log("there is error during insert into account ")
          } else {
            let user_id = result.insertId;
            console.log(user_id)
            // use login to make the session to user
            req.login(user_id, function (err) {
              user.id = user_id;
              res.send({
                status: 200,
                success: "Successed !",
                data: user
              });
            });

          }
        });
      } else {
        res.send({
          status: 404,
          success: "userExist",
        });
      }
    }
  });
});

// POST request for sign-in.
app.post('/sign-in', function (req, res) {
  var phoneNumber = req.body.phoneNumber;
  var password = req.body.password;
  db.isAccountExist(phoneNumber, function (err, result) {
    if (err) {
      console.log("(sign in) Error during check on the account exist ", err)
    } else {
      if (result.length > 0) {
        if (result[0].password === password) {
          // select user info from database and pass it to res
          let table = "users"
          console.log("Roles", result[0])
          if (result[0].id_roles === 2) {
            console.log("Change table")
            table = "advertiser"
          }

          db.selectUserInfo(result[0].id, result[0].id_roles, table, function (err, result) {
            console.log("success", result);
            let user_id = result[0].id;
            console.log("user", result[0])
            // use login to make the session to user
            req.login(user_id, function (err) {
              res.send({
                status: 200,
                success: "login_success",
                data: result[0]
              });
            });
          })

        } else {
          res.send({
            status: 401,
            success: "password_field"
          });
        }
      } else {
        res.send({
          status: 402,
          success: "user_not_exist"
        });
      }
    }
  })
});

app.get('/logout', function (req, res) {
  // console.log(req.user);
  // console.log(req.isAuthenticated);
  req.logOut();
  // send response to client to redirect to main page
  res.send({
    status: 404,
    success: "redirectTologin"
  });
});

// get request to latest-items 

app.get('/latest-items', function (req, res) {
  db.selectLatestItems(function (err, result) {
    if (err) {
      console.log("ERROR", err)
    } else {
      res.send({
        status: 200,
        success: "get top ten items successfuly",
        data: result
      });
    }
  });
});

// get request to retrive all the advertiser
app.get('/advertisers', function (req, res) {
  db.selectAdvertisers(function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  })
})

// post request to search
app.post('/search', authenticationMiddleware(), function (req, res) {
  console.log(req.body);
  const term = req.body.target;
  db.search(term, function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.send({
        status: 200,
        success: "successed!",
        data: results
      });
    }
  })

});



//////////////
//upload images to items.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../client/public/ItemImages')
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + file.originalname);
  }
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single('myImage')


app.post('/add-item', upload, (req, res) => {
  // recive the data from the formData request;
  let item = JSON.parse(req.body.item);
  // make link to image to save in database
  let imgUrl = 'http://' + req.get('host') + '/ItemImages/' + req.file.filename;
  // add image url to item object
  item.imgUrl = imgUrl;
  // insert into database
  db.insertIntoItems(item.advertiserID, item, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      // retrive the data after update  the items
      db.selectItems(item.advertiserID, function (err, results) {
        if (err) {
          throw err;
        } else {
          console.log(results)
          res.send({
            status: 200,
            success: "successed!",
            data: results
          });
        }
       });
  }
  })
  
});
//////////////////////
// upload images to advertisers.
const storageAdv = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../client/public/AdvertiserImages')
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + file.originalname);
  }
});


const uploadAdv = multer({
  storage: storageAdv,
  limits: { fileSize: 10000000 },
}).single('myAdvImage')


app.post('/sign-up-adv', uploadAdv, (req, res) => {
  console.log(req.file)
});

///////////////


// get request to retrive categories from database
app.get('/categories', function (req, res) {
  db.selectAllCategories(function (err, results) {
    if (err) throw err;
    res.send({
      status: 200,
      success: "successed!",
      data: results
    });
  })
})

// post request to retrive adfertisers for specific categories from database
app.post('/adv-category', function (req, res) {

  db.selectAdvertisers(function (err, results) {
    if (err) throw err;
    res.send({
      status: 200,
      success: "successed!",
      data: results
    });
  }, req.body.id_cat);
});

// post request to retrive items for advertiser 
app.post('/adv-items', function (req, res) {
  console.log(req.body);
  db.selectItems(req.body.adv_id, function (err, results) {
    if (err) throw err;
    res.send({
      status: 200,
      success: "successed!",
      data: results
    });
  });
});


// store  data to session here we pass user_id
passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
// read from the session
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});

//Used to restrict access to particular pages in combination with Passport.js
function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.send({
      status: 404,
      success: "redirectTologin"
    });
  }
}

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
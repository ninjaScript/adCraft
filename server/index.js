const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')
const session = require('express-session');
const passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var router = express.Router();

const app = express();
app.use(express.static(__dirname + '/../client/build'));
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configration MySqlStore to save the sessions;
var options = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "adCraft"
};
// create object of mysqlstore and pass the option and we want to edit the session config
var sessionStore = new MySQLStore(options)


// configration session
app.use(session({
  secret:'ahhsjdhakasfhbasjkfhsakfsahf',
  store: sessionStore,
  resave: false,
  saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
// POST request for sign-up.


app.post('/sign-up', function (req, res) {

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
            const user_id = result.insertId;
            // use login to make the session to user
            req.login(user_id, function(err){
              res.send({
                status: 200,
                success: user
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
          db.selectUserInfo(result[0].id, result[0].id_roles, function (err, result){
            console.log("success",result);
            res.send({
              status: 200,
              success: "login_success",
              data:result[0]
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

app.get('/logout', function(req, res){
  // console.log(req.user);
  // console.log(req.isAuthenticated);
  req.logOut();
  // send response to client to redirect to main page
  res.res.send({
    status: 404,
    success: "redirectTologin"
  });
});

// get request to latest-items 
app.get('/latest-items',function(req, res) {
  db.selectLatestItems(req.body, function (err, result) {
    if (err) {
      console.log("ERROR", err)
    } else {
      res.send({
        status: 200,
        success: "get top ten items successfuly",
        data:result
      });
    }
  });
});


// store  data to session here we pass user_id
passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});
// read from the session
passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});

//Used to restrict access to particular pages in combination with Passport.js
function authenticationMiddleware () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.res.send({
        status: 404,
        success: "redirectTologin"
      });
	}
}

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
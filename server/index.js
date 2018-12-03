const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js')
var router = express.Router();

const app = express();
app.use(express.static(__dirname + '/../client/build'));
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

  db.isAccountExist(user.phoneNumber, function (err, result) {
    if (err) {
      console.log("error in check ", err)
    } else {
      if (result.length === 0) {
        db.insertAccount(user, function (err, result) {
          if (err) {
            console.log("there is error during insert into account ")
          } else {
            res.send({
              status: 200,
              success: user
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
          res.send({
            status: 200,
            success: "login_success"
          });
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
  console.log(req.body);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
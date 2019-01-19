var mysql = require('mysql');

var connection = mysql.createConnection({
     // host: "us-cdbr-iron-east-01.cleardb.net",
     // user: "b625a4a27a00be",
     // password: "d77c446e",
     // database: "heroku_9e28b24ede6cb89"

     host: "localhost",
     user: "root",
     password: "password",
     database: "adCraft"
     
     // host: "db4free.net",
     // user: "ninjascript2",
     // password: "password",
     // database: "adcraft2"
     
});
 connection.connect(function (err, result) {
      if (err) {
        throw err
      }
    console.log(result)
    });

module.exports = connection;
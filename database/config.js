var mysql = require('mysql');

var connection = mysql.createConnection({
     host: "us-cdbr-iron-east-01.cleardb.net",
     user: "b625a4a27a00be",
     password: "d77c446e",
     database: "adCraft"
});


module.exports = connection;
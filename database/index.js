const mysql = require('mysql')
const connection = require('./config.js')


// to get date format
let formatDate = () => {
	var d = new Date();
	 dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('-')+' '+
               [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
     return dformat;         
}

const selectAll = function(tableName, callback) {
  connection.query(`SELECT * FROM ${tableName}`, function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// function to add roles to database (user and advertiser)



// this function to insert into account table
const insertUser = function (user, callback) {

	// sql query  to insert
	var sqlInsIntoAccountTable = `INSERT INTO account (phoneNumber, password, id_roles , createdAt) 
	VALUES("${user.phoneNumber}", "${user.password}", "${user.id_roles}", "${user.createdAt}");`;
    
	// exute query 
	connection.query(sqlInsIntoAccountTable, function(err, result){
		if (err) {
		   console.log('Error during insert into account table', err)
		   callback(err, null)
		} else {
			console.log('insert into account Successed!')
 			insertIntoUser(user, result, callback)
		}
	})

}

// this function to insert into user table
const insertIntoUser = function (user, result, callback){
	// sql query  to insert
	var sqlInsIntoUserTable = `INSERT INTO users (firstName, lastName , gender, id_account) 
    VALUES("${user.firstName}", "${user.lastName}", "${user.gender}", ${result.insertId});`;

    // exute query 
	connection.query(sqlInsIntoUserTable, function(err, result){
		if(err) {
			console.log('Error during insert into user table', err)
			callback(err, null)
		} else {
			console.log('insert into user Successed!')
			callback(null, result);
		}
    });
}

// const isAccountExist = function(phoneNumber, callback){

// 	var 
// }






module.exports.selectAll = selectAll;
module.exports.insertUser = insertUser;
module.exports.formatDate = formatDate;
module.exports.insertIntoUser = insertIntoUser;

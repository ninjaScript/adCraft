const connection = require('../database/config.js');
const db = require('../database/index.js'); 
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var user ={
	firstName: "MOhammad",
	lastName: "hasan",
	phoneNumber: "0796305984",
	password: "helloworld",
	gender: "male",
	id_roles: 1,
	createdAt : db.formatDate()
}



describe('DataBase', function(){
	var testResult;
	it('connection.connect should connect', function(done) {
	    connection.connect(function(err, result) {
	        if(err){
	           throw err
	        }
	        expect(result).to.not.be.null;
	        done();
	    });
	});


	it('should insert account to db', function(done){

		db.insertUser(user, function(err, result){
			if(err){
				throw  err
			}
			console.log(result)
			testResult = result;
			expect(result.insertId).to.not.equal(0);
      done();
		})
	});

//    console.log("test result, ",testResult);
// 	it('should insert user to db', function(done){
// 		db.insertIntoUser(user, testResult, function(err, result){
// 			if(err){
// 				throw 
// 			}
// 			expect(result.insertId).to.not.equal(0);
//       done();
// 		})err
// 	});
// });

// db.insertUser(user,function(err, res){

// })
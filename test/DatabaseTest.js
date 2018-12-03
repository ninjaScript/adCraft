const connection = require('../database/config.js');
const db = require('../database/index.js'); 
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var advertiser ={
	firstName: "MOhammad",
	lastName: "hasan",
	gender: "male",
	email: "qusay@example.com",
	imageUrl: "https://i.imgur.com/EDge1nS.jpg",
	numFeedback: 12,
	rateAvg: 6,
	location: "amman",
	id_account: 2,
	id_categories: 3,
	id_roles: 2,
	phoneNumber: "0796305984",
	password: "helloworld"
}

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







	it('should insert account and user to db', function(done){

		db.insertUser(user, function(err, result){
			if(err){
				throw  err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});

});

// db.insertUser(user,function(err, res){

// })
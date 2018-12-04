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
	id_categories: 1,
	id_roles: 2,
	phoneNumber: "0796305984",
	password: "helloworld",
	createdAt: db.formatDate()
}

var roleUser = {
	role: "user"
}

var roleAdv = {
	role: "advertiser"
}


var item = {
	name: "bike",
	price: 33,
	imgUrl: "https://i.imgur.com/KXBhaNv.jpg",
	descr: "its the best bike",
	createdAt: db.formatDate()
}

var item2 = {
	name: "bike2",
	price: 332,
	imgUrl: "https://i.imgur.com/KXBhaNv.jpg",
	descr: "its the best bike2",
	createdAt: db.formatDate()
}


var categories = {
	name: "craft",
	imgUrl: "https://i.imgur.com/oE2cxsA.jpg",
	createdAt: db.formatDate()
}





var user = {

	firstName: "MOhammad",
	lastName: "hasan",
	phoneNumber: "0796305984",
	password: "helloworld",
	gender: "male",
	id_roles: 1,
	createdAt: db.formatDate()
}



describe('Database ', function () {
	// var testResult;
	it('connection.connect should connect', function (done) {
		connection.connect(function (err, result) {
			if (err) {
				throw err
			}
			expect(result).to.not.be.null;
			done();
		});
	});


	it('should insert role to db', function (done) {
		db.addRoles(roleUser, function(err, result){
			if (err) {
				throw err
			}else {
				console.log(result)
			}
		})
		db.addRoles(roleAdv, function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});



	it('should insert accountUser and user to db', function (done) {

		db.insertAccount(user, function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});


	it('should insert categories to db', function (done) {
		db.insertIntoCat(categories, function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});





	it('should insert accountAdv and user to db', function (done) {

		db.insertAccount(advertiser, function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});


	it('should insert items to db', function (done) {
		db.insertIntoItems(1, item2, function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});




	it('should select items from tables', function (done) {
		db.selectAll('items', function (err, result) {
			if (err) {
				throw err
			} else {
				expect(result).to.be.not.null;
				done()
			}
		})
	});


});


const connection = require('../database/config.js');
const db = require('../database/index.js');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var advertiser = {
  firstName: "Kenan",
  lastName: "Hasan",
  gender: "male",
  email: "qusay@example.com",
  imageUrl: "https://i.imgur.com/EDge1nS.jpg",
  numFeedback: 70,
  rateAvg: 5,
  location: "amman",
  id_categories: 1,
  id_roles: 2,
  phoneNumber: "c",
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
  name: "chicken",
  price: 33,
  imgUrl: "https://i.imgur.com/KXBhaNv.jpg",
  descr: "its the best bike",
  id_advertiser: 1,
  createdAt: db.formatDate()
}

var item2 = {
  name: "bike2",
  price: 332,
  imgUrl: "https://i.imgur.com/KXBhaNv.jpg",
  descr: "its the best bike2",
  id_advertiser: 2,
  createdAt: db.formatDate()
}


var categories = {
  name: "Food",
  imgUrl: "https://i.imgur.com/oE2cxsA.jpg",
  createdAt: db.formatDate()
}

var user = {

  firstName: "Ali",
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

    db.addRoles(roleUser, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
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
    db.insertIntoItems(2, item2, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done();
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

  it('should search user info from tables', function (done) {
    db.selectUserInfo(2, 2, 'advertiser',function (err, result) {
      if (err) {
        throw err
      } else {
        console.log("lol",result)
        expect(result).to.be.not.null;
        done()
      }
    })
  });

    it('should get 10 latest items', function (done) {
    db.selectLatestItems(function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done()
      }
    })
  });


    it('should select advertisers', function (done) {
    db.selectAdvertisers(1, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done()
      }
    })
  });


    it('should select advertisers', function (done) {
    db.search('amman', function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done()
      }
    })
  });


    it('should select all categories', function (done) {
    db.selectAllCategories(function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done()
      }
    })
  });



    it('should select all items for advertiser', function (done) {
    db.selectItems(1, function (err, result) {
      if (err) {
        throw err
      } else {
        console.log("test:",result)
        expect(result).to.be.not.null;
        done()
      }
    })
  });



    it('should select all items for advertiser category', function (done) {
    db.selectAdvertiserforCategory(1, function (err, result) {
      if (err) {
        throw err
      } else {
        expect(result).to.be.not.null;
        done()
      }
    })
  });



});


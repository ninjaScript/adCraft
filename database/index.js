const mysql = require('mysql')
const connection = require('./config.js')

const selectAll = function (tableName, callback) {
  connection.query(`SELECT * FROM ${tableName}`, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// function to return the datetime 
const formatDate = () => {
  var d = new Date();
  dformat = [d.getMonth() + 1,
  d.getDate(),
  d.getFullYear()].join('-') + ' ' +
    [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':');
  return dformat;
}


// function to add roles to database (user and advertiser)

const addRoles  = function (role, callback) {
	var sqlInsIntoRolesTable = `INSERT INTO roles (role) VALUES("${role.role}");`;

    // execute query 
	connection.query(sqlInsIntoRolesTable, function(err, result){
		if(err) {
			console.log('Error during insert into roles table', err)
			callback(err, null)
		} else {
			console.log('insert into roles Successed!')
			callback(null, result);
		}
  });
}

// function to check if the user has account or not  
const isAccountExist = function (phoneNumber, callback) {
  let sql = `select * from account where phoneNumber = ${phoneNumber}`;
  connection.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

// this function to insert into account table
const insertAccount = function (user, callback) {
  // sql query  to insert
  //id_roles shows undefined but saves as numbers.
  console.log("Roles Id ", user);
  let sqlInsIntoAccountTable = `INSERT INTO account (phoneNumber, password, id_roles , createdAt) 
	VALUES("${user.phoneNumber}", "${user.password}", "${user.id_roles}", "${user.createdAt}");`;

  // exute query 
  connection.query(sqlInsIntoAccountTable, function (err, result) {
    if (err) {
      console.log('Error during insert into account table', err);
      callback(err, null);
    } else {
      console.log('insert into account Successed!');
      if (user.id_roles === 1) {
        insertIntoUser(user, result, callback);
      } else {
        insertIntoAdv(user, result, callback);
      }
    }
  })
}

// this function to insert into user table
const insertIntoUser = function (user, result, callback) {
  // sql query  to insert
  let sqlInsIntoUserTable = `INSERT INTO users (firstName, lastName , gender, id_account) 
    VALUES("${user.firstName}", "${user.lastName}", "${user.gender}", ${result.insertId});`;
  // exute query 
  connection.query(sqlInsIntoUserTable, function (err, result) {
    if (err) {
      console.log('Error during insert into user table', err);
      callback(err, null);
    } else {
      console.log('insert into user Successed!');
      callback(null, result);
    }
  });
}


const insertIntoCat = function (catName, callback){
	// sql query  to insert
	var sqlInsIntoCategoriesTable = `INSERT INTO categories (name, imgUrl, createdAt) 
	VALUES("${catName.name}", "${catName.imgUrl}", "${catName.createdAt}");`

  // execute query 
  connection.query(sqlInsIntoCategoriesTable, function (err, result) {
    if (err) {
      console.log('Error during insert into Categories table', err);
      callback(err, null);
    } else {
      console.log('insert into Categories Successed!');
      callback(null, result);
    }
  });
}

// this function to insert into advertiser table
const insertIntoAdv = function (user, result, callback) {
  // sql query  to insert
  var sqlInsIntoAdvertiserTable = `INSERT INTO advertiser (firstName, lastName, gender, email, 
	imgUrl, numFeedback, rateAvg, location, id_account, id_categories) 
	VALUES("${user.firstName}", "${user.lastName}", "${user.gender}","${user.email}", "${user.imgUrl}",
	"${user.numFeedback}", "${user.rateAvg}", "${user.location}", "${result.insertId}", "${user.id_categories}");`;
  // "${user.id_account}"
  // execute query 
  connection.query(sqlInsIntoAdvertiserTable, function (err, result) {
    if (err) {
      console.log('Error during insert into advertiser table', err);
      callback(err, null);
    } else {
      console.log('insert into advertiser Successed!');
      callback(null, result);
    }
  });
}

const insertIntoItems = function (ad_id, item, callback) {
  // sql query  to insert
  var sqlInsIntoItemsTable = `INSERT INTO items (name, price, imgUrl, descr, createdAt) 
	VALUES("${item.name}", "${item.price}", "${item.imgUrl}", "${item.descr}", "${item.createdAt}");`;

  // execute query 
  connection.query(sqlInsIntoItemsTable, function (err, result) {
    if (err) {
      console.log('Error during insert into Items table', err);
      callback(err, null);
    } else {
      console.log('insert into Items Successed!');
      // callback(null, result);
      advertiser_Items(ad_id, result.insertId, callback);
    }
  });
}

const advertiser_Items = function (adv_id, item_id, callback) {
  var sqlInsIntoAdvitemTable = `INSERT INTO advertiser_Items (id_advertiser, id_items);
	 VALUES("${adv_id}", "${item_id}");`;

  // execute query 
  connection.query(sqlInsIntoAdvitemTable, function (err, result) {
    if (err) {
      console.log('Error during insert into advitem table', err);
      callback(err, null);
    } else {
      console.log('insert into advitem Successed!');
      callback(null, result);
    }
  });
}

////////////////////////////select functions /////////////
const selectUserInfo = function (id, rolesId, callback) {
  var sql = `select account.phoneNumber, account.id_roles, users.* from account 
	inner join users 
	on account.id = users.id_account
    where account.id = '${id}' and account.id_roles='${rolesId}'`;
  connection.query(sql, function (err, result) {
    if (err) {
      throw err
    } else {
      callback(null, result);
    }
  });
}

// This function to get the latest 10 items from the items table.
const selectLatestItems = function (user, callback) {
  var sqlTopTenItems = `SELECT advertiser.firstName, advertiser.lastName, items.name, items.price, items.imgUrl, items.descr,
                         items.createdAt FROM items
                         INNER JOIN advertiser_Items ON id_items = items.id
                          INNER JOIN advertiser ON advertiser.id = id_advertiser
                        ORDER BY items.id DESC LIMIT 10`;
  connection.query(sqlTopTenItems, function (err, result) {
    if (err) {
      throw err;
    } else {
      callback(null, result);
    }
  });
}

// function to select all the advertiser
const selectAdvertisers= function(callback){
  let sql = `select advertiser.*, categories.name  from advertiser 
            inner join categories on advertiser.id_categories = categories.id `;
  connection.query(sql, function (err, results){
    if(err){
      console.log('Error during select data from advertisers\n', err);
      callback(err, null);
    } else {
      callback (null, results);
    }
  })
}



//this function is to search items in the database including the location



const selectAdvertiserInfowithItems = function (id, callback) {
	let sqlAdvertiser = `select account.phoneNumber, account.id_roles, users.* from account 
	inner join users 
	on account.id = users.id_account
    where account.id = '${id}' and account.id_roles='${rolesId}'`;
	connection.query(sqlAdvertiser, function (err, result) {
		if (err) {
			throw err	
		} else {
			callback(null, result);
		}
	});
}


module.exports.selectAll = selectAll;
module.exports.insertAccount = insertAccount;
module.exports.formatDate = formatDate;
module.exports.isAccountExist = isAccountExist;
module.exports.selectUserInfo = selectUserInfo;
module.exports.insertIntoCat = insertIntoCat;
module.exports.insertIntoItems = insertIntoItems;
module.exports.addRoles = addRoles;
module.exports.advertiser_Items = advertiser_Items;
module.exports.selectLatestItems = selectLatestItems;
module.exports.selectAdvertisers = selectAdvertisers;

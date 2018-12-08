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

const addRoles = function (role, callback) {
  var sqlInsIntoRolesTable = `INSERT INTO roles (role) VALUES("${role.role}");`;

  // execute query 
  connection.query(sqlInsIntoRolesTable, function (err, result) {
    if (err) {
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
const insertIntoUser = function (user, resultAccount, callback) {
  // sql query  to insert
  let sqlInsIntoUserTable = `INSERT INTO users (id,firstName, lastName , gender) 
    VALUES( ${resultAccount.insertId},"${user.firstName}", "${user.lastName}", "${user.gender}");`;
  // exute query 
  connection.query(sqlInsIntoUserTable, function (err, result) {
    if (err) {
      console.log('Error during insert into user table', err);
      callback(err, null);
    } else {
      console.log('insert into user Successed!', resultAccount);
      callback(null, resultAccount);
    }
  });
}

// this function to insert into advertiser table
const insertIntoAdv = function (user, resultAccount, callback) {
  // sql query  to insert
  var sqlInsIntoAdvertiserTable = `INSERT INTO advertiser (id, firstName, lastName, gender, email, 
	imgUrl, numFeedback, rateAvg, location, id_categories) 
	VALUES("${resultAccount.insertId}", "${user.firstName}", "${user.lastName}", "${user.gender}","${user.email}", "${user.imgUrl}",
	"${2596}", "${23}", "${user.location}", "${user.category}");`;
  // "${user.id_account}"
  // execute query 
  connection.query(sqlInsIntoAdvertiserTable, function (err, result) {
    if (err) {
      console.log('Error during insert into advertiser table', err);
      callback(err, null);
    } else {
      console.log('insert into advertiser Successed!', resultAccount);
      callback(null, resultAccount);
    }
  });
}


const insertIntoCat = function (catName, callback) {
  // sql query  to insert
  var sqlInsIntoCategoriesTable = `INSERT INTO categories (name, imgUrl, createdAt) 
	VALUES("${catName.name}", "${catName.imgUrl}", "${catName.createdAt}");`

  // execute query 
  connection.query(sqlInsIntoCategoriesTable, function (err, result) {
    if (err) {
      console.log('Error during insert into Categories table', err);
      callback(err, null);
    } else {
      console.log('insert into Categories Successed!', result);
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
  var sqlInsIntoAdvitemTable = `INSERT INTO advertiser_Items (id_advertiser, id_items)
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

const selectUserInfo = function (id, rolesId, table,callback) {
  var sql = `select account.phoneNumber, account.id_roles, ${table}.* from account 
	inner join ${table} 
	on account.id = ${table}.id
    where account.id = ${id} and account.id_roles=${rolesId};`;
  connection.query(sql, function (err, result) {
    if (err) {
      throw err
    } else {
      callback(null, result);
    }
  });
}

// This function to get the latest 10 items from the items table.
const selectLatestItems = function (callback) {
  var sqlTopTenItems = `SELECT advertiser.firstName, advertiser.lastName, items.name, items.price, items.imgUrl, items.descr,
                         items.createdAt FROM items
                         INNER JOIN advertiser_Items ON advertiser_Items.id_items = items.id
                         INNER JOIN advertiser ON advertiser.id = advertiser_Items.id_advertiser
                        ORDER BY items.id DESC LIMIT 10;`;
  connection.query(sqlTopTenItems, function (err, result) {
    if (err) {
      throw err;
    } else {
      callback(null, result);
    }
  });
}

// function to select all the advertiser and select advertiser for specific category
// depend on the id if pass to function or not
const selectAdvertisers = function (callback, id) {
  let sql = `select advertiser.*, categories.name  from advertiser 
            inner join categories on advertiser.id_categories = categories.id;`;

   if(id) {
    sql = `select advertiser.*, categories.name  from advertiser
    inner join categories on advertiser.id_categories = categories.id
    and categories.id = ${id}`;
   }
  connection.query(sql, function (err, results) {
    if (err) {
      console.log('Error during select data from advertisers', err);
    } else {
      callback(null, results);
    }
  })
}


// function to search in advertiser table debend on name or city 
// ,item table , categories table
const search = function (term, callback) {
  let sql = `select advertiser.*, categories.name from categories inner join advertiser  
    on advertiser.id_categories = categories.id    
    inner join advertiser_Items    
    on advertiser.id = advertiser_Items.id_advertiser   
    inner join items on advertiser_Items.id_items = items.id 
    and  advertiser.firstName like "%${term}%" or advertiser.lastName like "%${term}%"
    or advertiser.location like "%${term}%" or categories.name like "%${term}%"
    or items.name like "%${term}%" or items.name like "%${term}%" ;`;
  connection.query(sql, function (err, results) {
    if (err) {
      console.log('Error during search in database\n', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

// This function to select all user from database
const selectAllCategories = function (callback) {
  let sql = `select * from categories;`
  connection.query(sql, function (err, results) {
    if (err) {
      console.log('Error during select categories of database\n', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

//function to select items for each advertiser
 
const selectItems = function(adv_id, callback){
  let sql = `select items.* from advertiser 
  inner join advertiser_items 
  on advertiser.id = advertiser_items.id_advertiser
  inner join items
  on items.id = advertiser_items.id_items
  and advertiser.id = '${adv_id}';`;
  connection.query(sql, function (err, results) {
    if (err) {
      console.log('Error during select items of database\n', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}


//this function is to search items in the database including the location

const selectAdvertiserforCategory = function (id, callback) {
  let sqlAdvertiser = `select advertiser.*, categories.name from advertiser 
	inner join categories on advertiser.id_categories = categories.id
    where categories.id = '${id}'`;
  connection.query(sqlAdvertiser, function (err, result) {
    if (err) {
      throw err
    } else {
      callback(null, result);
    }
  });
}

///////////////// delete funcations

// function to delete item from the advertiser_items and items table
const deleteItem = function (item_id, callback) {
  let sql = `delete from advertiser_items where advertiser_items.id_items = '${item_id}';`;
  connection.query(sql, function(err, result) {
    if(err) throw err ;
    deleteItemFromTableItem (item_id, callback);
  })

}

const deleteItemFromTableItem = function (item_id, callback){
  let sql = `delete from items where id = '${item_id}';`;
  connection.query(sql, function(err, result) {
    if(err) throw err ;
    callback(null, result);
  })
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
module.exports.search = search;
module.exports.selectAllCategories = selectAllCategories;
module.exports.selectItems = selectItems;
module.exports.selectAdvertiserforCategory = selectAdvertiserforCategory;
module.exports.deleteItem = deleteItem;
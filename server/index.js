const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');  
const app = express();
app.use(express.static(__dirname + '/../client/build'));

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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

var user ={
	firstName: "MOhammad",
	lastName: "hasan",
	phoneNumber: "0796305984",
	password: "helloworld",
	gender: "male",
	id_roles: 2,
	createdAt : formatDate()
}

db.insertUser(user,function(err, res){

})


app.listen(port, ()  => console.log(`Listening on port ${port}`));

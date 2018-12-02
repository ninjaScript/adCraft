const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');  
const app = express();
app.use(express.static(__dirname + '/../client/build'));

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, ()  => console.log(`Listening on port ${port}`));

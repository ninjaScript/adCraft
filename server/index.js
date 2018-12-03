const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();
app.use(express.static(__dirname + '/../client/build'));

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST request for sign-up.
app.post('/sign-up', function(req, res) {
	var today = new Date();
	var user = {
		"firstName": req.body.firstName,
		"lastName": req.body.lastName,
		"phoneNumber": req.body.phoneNumber,
		"password": req.body.password,
		"gender": req.body.gender,
		"created": today
	}
	console.log(user);
	res.send({
		status: 200,
		success: user
	})
	console.log(res);
});

// POST request for sign-in.
app.post('/sign-in', function(req, res) {
	var phoneNumber = req.body.phoneNumber;
	var password = req.body.password;
})

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
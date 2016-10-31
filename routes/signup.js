var express = require('express');
var router = express.Router();
var db = require('mysql');

// DB connection
dbconn = db.createConnection({
	host: '137.142.1.54',
	user: "amos",
	password: "olasoji",
	database: "campuSale",
});

// POST sign up controller

router.post('/', function(req, res, next){
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email = req.body.email;
	var phone_num = req.body.phone_number;
	var zip = req.body.zip;
	var pass1 = req.body.password;
	var pass2 = req.body.confirm_pass;

	// SQL query
	dbconn.query({sql: "INSERT INTO students SET ?", values: {firstName: fname, lastName: lname, email: email, phone: phone_num, zip: zip, password: pass1}}, function(err, result){
		if(err){
			console.log(err);
			res.send(err);
		}
		res.send(result);
	});
	
	console.log( fname, lname, email, phone_num, zip, pass1, pass2);
	res.send("Reply from sign up controller: ", fname, lname, email, phone_num, zip, pass1, pass2);
});



module.exports = router; 

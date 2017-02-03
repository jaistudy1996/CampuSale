var express = require('express');
var router = express.Router();
var db = require('mysql');

// DB connection
dbconn = db.createConnection({
	host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: "bfynpup47tg4w9s7",
	password: "dcv5v5fj7l26qt7w",
	database: "bq5bbb87a4xdzf91",
	//debug: true,
});

//dbconn.query("SHOW WARNINGS", function(err, result){});

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
	dbconn.query('INSERT INTO students (firstName, lastName, email, phone, zip, password) values (?, ?, ?, ?, ?, PASSWORD(?)) ', [fname, lname, email, phone_num, zip, pass1], function(err, result){
		if(err){
			console.log(err.code);
			res.status(404).send(err.code);
		}
		//var result1 = result;
		//dbconn.query("SHOW WARNINGS", function(err, result){
		//	result1.result2 = result;	
		//});
		res.send(result);
	});
	
	console.log( fname, lname, email, phone_num, zip, pass1, pass2);
	//res.send("Reply from sign up controller: ", fname, lname, email, phone_num, zip, pass1, pass2);
});



module.exports = router; 

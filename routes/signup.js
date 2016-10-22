var express = require('express');
var router = express.Router();
var db = require('mysql');

// DB connection

// POST sign up controller

router.post('/', function(req, res, next){
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email = req.body.email;
	var pass1 = req.body.password;
	var pass2 = req.body.confirm_pass;
	res.send("Reply from sign up controller");
});



module.exports = router; 

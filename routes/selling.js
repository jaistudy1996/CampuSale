var express = require('express');
var router = express.Router();
var db = require('mysql');

// DB connection
dbconn = db.createConnection({
	host: '137.142.1.54',
	user: "amos",
	password: "olasoji",
	database: "campuSale",
	//debug: true,
});::

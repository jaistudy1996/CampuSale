var express = require('express');
var router = express.Router();
var db = require('mysql');

// Connect to database.
var dbpool = db.createConnection({
        //connectionLimit: 10,
        host: '137.142.1.54',
        user: 'amos',
        password: 'olasoji',
        database: 'campuSale'
});


// This is for POST method in index.jade.

router.post('/', function(req, res, next) {
	console.log(req.param("uname"));
	console.log(req.param("psw"));
	res.render("listing", {});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var dbconn = require('mysql');

var db = dbconn.createConnection({
		host: "137.142.1.54",
		user: "amos",
		password: "olasoji",
		database: "campuSale"
	}); 

router.get('/', function(req, res, next){
	db.query("SELECT * FROM tags", function(err, result){
		if(err){
			console.log(err);
		}
		console.log(result);
	});
	res.render("listing", {});
});

module.exports = router;

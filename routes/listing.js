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
			res.send(err);
		}
		console.log(result);
	});
	res.render("listing", {});
});

router.post("/tags", function(req, res, next){
	db.query("SELECT * FROM tags", function(err, result){
		if(err){
			console.log(err);
		}
		else{
			console.log(typeof result);
			res.send(result);
		}
	});
});

module.exports = router;

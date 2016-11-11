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
	db.query("SELECT * FROM category", function(err, result){
		if(err){
			console.log(err);
		}
		//console.log(result);
	});
	res.render("listing", {});
});

router.post("/tags", function(req, res, next){
	db.query("SELECT * FROM category", function(err, result){
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
			res.send(result);
		}
	});
});

router.post("/items/:tagID", function(req, res, next){
	console.log(json.parse(req.params.tagID));
	res.send(req.params);
});

module.exports = router;

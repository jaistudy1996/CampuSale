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
	//db.query("SELECT * FROM category", function(err, result){
	//	if(err){
	//		console.log(err);
	//	}
		//console.log(result);
	//});
	res.render("listing", {});
});

router.post("/category", function(req, res, next){
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

router.post("/items", function(req, res, next){
	db.query("SELECT itemID, price, description, categoryID, title FROM items", function(err, result){
		if(err){
			console.log(err)
		}
		res.send(result)
	});
});

router.post('/items/:categoryID', function(req, res, next){
	console.log(json.parse(req.params.categoryID));
	//res.send(req.params);
	console.log(req.params);
});

module.exports = router;

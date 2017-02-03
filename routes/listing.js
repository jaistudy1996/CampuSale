var express = require('express');
var router = express.Router();
var dbconn = require('mysql');

var db = dbconn.createConnection({
		host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "bfynpup47tg4w9s7",
		password: "dcv5v5fj7l26qt7w",
		database: "bq5bbb87a4xdzf91"
	}); 

router.get('/', function(req, res, next){
	user = req.signedCookies.loginName;
	if(user){
		res.render("listing", {Username: user});
	}
	else{
		res.redirect("/");
	}
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
	db.query("SELECT itemID, price, description, categoryID, title, imagePath FROM items", function(err, result){
		if(err){
			console.log(err)
		}
		res.send(result);
	}); 
});

router.get("/items/:categoryID", function(req, res, next){
	res.redirect("/item");
	//res.redirect("/listing");
	//console.log(json.parse(req.params.categoryID));
	//res.send(req.params);
	//console.log(req.params);
});

module.exports = router;

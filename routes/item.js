var express = require("express");
var router = express.Router();
var db = require("mysql");

// Connect to database.
var dbconn = db.createConnection({
        //connectionLimit: 10,
        host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bfynpup47tg4w9s7',
        password: 'dcv5v5fj7l26qt7w',
        database: 'bq5bbb87a4xdzf91'
});

router.get("/", function(req, res, next){
	username = req.signedCookies.loginName
	if(username){
		res.render("item", {Username: username});
	}
	else{
		res.redirect("/");
	}
});

router.get("/:itemID", function(req, res, next){
	username = req.signedCookies.loginName;
	itemID = req.params.itemID;
	if(username){
		dbconn.query("SELECT price, sellerID, description, title, imagePath, categoryID FROM items where itemID = ?", [itemID], function(err, results){
			if(err){
				console.log(err);
			}
			else{
				console.log(results);
				res.render("item", {items: results[0], Username: username});
			}
		});
		//res.redirect("/item");
	}
	else{
		res.redirect("/");
	}
});

router.post("/upload", function(req, res, next){
	userID = req.signedCookies.userID;
	var sellerID = userID;
	console.log("Item upload");
	var title = req.body.title;
	var price = req.body.price;
	var location = req.body.location;
	var description = req.body.description;
	var category = req.body.category;
	var file;
	file = req.files.file;
	var path = "itemImages/"+userID+"-"+req.body.title+"-"+userID+".jpg";
	file.mv(("public/"+path), function(err){
		if(err){
			console.log("NOT UPLOADED");
			console.log(err);
			res.send("Image uplaod failed");
		}
		else{
			console.log("File uploaded");
		}
	});

	dbconn.query('INSERT INTO seller (sellerID) values (?)', [userID], function(err, result){
		if(err){
			console.log(err);
		}
	});

	dbconn.query('INSERT INTO items (price, sellerID, description, categoryID, title, imagePath) values(?, ?, ?, ?, ?, ?)', [price, sellerID, description, category, title, path], function(err, result){
		if(err){
			console.log(err);
			res.send(err.code);
		}
		else{
			console.log(result);
		}
	});
	res.redirect("/listing");
});

module.exports = router;

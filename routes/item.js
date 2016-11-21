var express = require("express");
var router = express.Router();
//var fileUpload = require("express-fileupload");

router.get("/", function(req, res, next){
	res.render("item", {});
});

router.get("/:itemID", function(req, res, next){
	res.redirect("/item");
});

router.post("/upload", function(req, res, next){
	console.log("Item upload");
	console.log(req.files);
	var file;
	file = req.files.file;
	console.log(file);
	file.mv("public/images/testUpload.jpg", function(err){
		if(err){
			console.log("NOT UPLOADED");
			console.log(err);
		}
		else{
			console.log("File uploaded");
		}
	});
	res.redirect("/listing");
});

module.exports = router;

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	res.render("item", {});
});

router.get("/:itemID", function(req, res, next){
	res.redirect("/item");
});

module.exports = router;

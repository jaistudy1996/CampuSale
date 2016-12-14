var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	res.clearCookie('loginName');
	res.clearCookie('userID');
	res.clearCookie('userName');
	res.render("logout", {});
});

module.exports = router;

var express = require('express');
var router = express.Router();


// GET request
router.get('/', function(req, res, next){
	user = req.signedCookies.loginName;
	if(user){
		res.render('profile', {Username: user});
	}
	else{
		res.redirect('/');
	}	
});

module.exports = router;

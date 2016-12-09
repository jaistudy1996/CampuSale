var express = require('express');
var router = express.Router();
var db = require('mysql');

// Database login
var dbconn = db.createConnection({
        //connectionLimit: 10,
        host: '137.142.1.54',
        user: 'amos',
        password: 'olasoji',
        database: 'campuSale'
});


// GET request
router.get('/', function(req, res, next){
	name = req.signedCookies.loginName;
	user = req.signedCookies.userName;
	if(user){
		res.render('profile', {Name: name, Username: user});
	}
	else{
		res.redirect('/');
	}	
});

module.exports = router;

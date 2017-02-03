var express = require('express');
var router = express.Router();
var db = require('mysql');

// Database login
var dbconn = db.createConnection({
        //connectionLimit: 10,
        host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bfynpup47tg4w9s7',
        password: 'dcv5v5fj7l26qt7w',
        database: 'bq5bbb87a4xdzf91'
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

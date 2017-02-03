var express = require('express');
var router = express.Router();
var db = require('mysql');

// Connect to database.
var dbconn = db.createConnection({
        //connectionLimit: 10,
        host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bfynpup47tg4w9s7',
        password: 'dcv5v5fj7l26qt7w',
        database: 'bq5bbb87a4xdzf91'
});


// This is for POST method in index.jade.

router.post('/', function(req, res, next) {
	console.log(req.body.uname);
	console.log(req.body.psw);
	var uname = req.body.uname;
	var psw = req.body.psw;
	var cart = req.signedCookies.cart;
	//DB query
	dbconn.query("SELECT * FROM students where email = ? and password = password(?) LIMIT 1", [uname, psw], function(err, result){
		if(err){
			console.log(err);
			res.send(err);
		}
		console.log(result);
		if(result.length == 0){
			res.status(404).send("Username/Password is incorrect");
		}
		if(result.length == 1){
			console.log("length == 1");
			// 3600000  -- Change to 1 hr when testing is complete
			// res.cookie('login', true, {expires: new Date(Date.now() + 30000), signed: true});
			res.cookie('userID', result[0].id, {expires: new Date(Date.now() + 3600000), signed: true});
			res.cookie('loginName', result[0].firstName, {expires: new Date(Date.now() + 3600000), signed: true});
			res.cookie('userName', result[0].email, {expires: new Date(Date.now() + 3600000), signed: true});
			if(cart = undefined){
				res.cookie('cart', {items: []});
			}
			else{
				res.cookie('cart', {items: cart});
			}
			res.send("/listing");
		}
	});
	//res.send("Response from server");
});

module.exports = router;

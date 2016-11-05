var express = require('express');
var router = express.Router();
var db = require('mysql');

// Connect to database.
var dbconn = db.createConnection({
        //connectionLimit: 10,
        host: '137.142.1.54',
        user: 'amos',
        password: 'olasoji',
        database: 'campuSale'
});


// This is for POST method in index.jade.

router.post('/', function(req, res, next) {
	console.log(req.body.uname);
	console.log(req.body.psw);
	var uname = req.body.uname;
	var psw = req.body.psw;
	//DB query
	dbconn.query("SELECT * FROM students where email = ? and password = password(?) LIMIT 1", [uname, psw], function(err, result){
		if(err){
			console.log(err);
			res.send(err);
		}
		console.log(result);
	
	});
	res.send("Response from server");
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require("mysql");

var dbpool = db.createConnection({
        //connectionLimit: 10,
        host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bfynpup47tg4w9s7',
        password: 'dcv5v5fj7l26qt7w',
        database: 'bq5bbb87a4xdzf91'
});

dbpool.connect();

/* GET Users*/

router.get('/', function(req, res, next){
	res.render('users', {title: "Hello Users"});
});

/* POST users. */
router.post('/', function(req, res, next) {
    var fname = req.param("fname");
    var lname = req.param("lname");
    dbpool.query({sql: 'select * from students where firstName = ? and lastName = ?' , values: [fname, lname]}, function(err, rows, fields) {
        if(err){
                throw err;
        }
        console.log(rows);
	console.log("Type of rows: ", typeof(rows[0]));
        console.log(rows[0].email);
	//res.render('users', { title: rows });
	res.send(rows);
    });
    console.log(req.param("fname"));
    //res.send("well done.");
    //res.render('users', {title: 'Hello users'});
});

router.post('/image', function(req, res, next){ 
});

module.exports = router;

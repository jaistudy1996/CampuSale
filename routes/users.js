var express = require('express');
var router = express.Router();
var db = require("mysql");

var dbpool = db.createConnection({
        //connectionLimit: 10,
        host: '137.142.1.54',
        user: 'amos',
        password: 'olasoji',
        database: 'campuSale'
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
    var my_file = req.param("file");
    var file = file.read(my_file, "r");
    var file_contents = file.write(file, filesize(my_file));
    file.close();

    dbpool.query({sql: 'insert into pictures set file=?', values: [file_contents]}, function(err,rows, fields) {
	if(err){
		throw err;
	};
    });
});

module.exports = router;

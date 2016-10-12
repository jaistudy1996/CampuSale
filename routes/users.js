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

/* GET users listing. */
router.get('/', function(req, res, next) {
    var fname = req.param("fname");
    var lname = req.param("lname");
    dbpool.query({sql: 'select * from students where firstName = ? and lastName = ?' , values: [fname, lname]}, function(err, rows, fields) {
        if(err){
                throw err;
        }
        console.log("Lines are: ", rows);
        res.render('index', { title: rows });
    });
    console.log(req.param("fname"));
    res.render('users', {title: 'Hello users'});
});

module.exports = router;

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
    dbpool.query('select * from students', function(err, rows, fields) {
        if(err){
                throw err;
        }
        console.log("Lines are: ", rows);
        res.render('index', { title: rows });
    });
    res.render('users', {title: 'These are users'});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('mysql');

//database
//var dbpool = db.createConnection({
//        //connectionLimit: 10,
//        host: '137.142.1.54',
//        user: 'amos',
//        password: 'olasoji',
//        database: 'campuSale'
//});

//dbpool.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  //dbpool.query('select * from items limit 10', function(err, rows, fields) {
  //      if(err){
   //             console.log(err);
    //    }
    //    console.log("Lines are: ", rows);
	res.render('index', {});
  //});
 // dbpool.end();
  //res.render('index', { title: rows });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('mysql');

// POST sign up controller

router.post('/', function(req, res, next){
	res.send("Reply from sign up controller");
});



module.exports = router; 

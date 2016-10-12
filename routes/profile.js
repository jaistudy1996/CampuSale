var express = require('express');
var router = express.Router();


// GET request
router.get('/', function(req, res, next){
	res.render('profile', {});	
});

module.exports = router;

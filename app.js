var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mysql');
var fileUpload = require('express-fileupload');


var routes = require('./routes/index');
var users = require('./routes/users');
var profile = require('./routes/profile');
var login = require('./routes/login');
var signup = require('./routes/signup');
var listing = require('./routes/listing');
var item = require('./routes/item');
var selling = require('./routes/selling');
var changePassword = require('./routes/changePassword');
var logout = require('./routes/logout');

var app = express();

// Database
var dbpool = db.createConnection({
	//connectionLimit: 10,
	host: '137.142.1.54',
	user: 'amos',
	password: 'olasoji',
	database: 'campuSale'
});

dbpool.connect();

dbpool.query('select * from items limit 10', function(err, rows, fields) {
	if(err){
		throw err;
	}
	console.log("Lines are: ", rows);
});

dbpool.end();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("h17d7@6e7"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/', routes);
app.use('/users', users);
app.use('/profile', profile);
app.use('/login', login);
app.use('/signup', signup);
app.use('/listing', listing);
app.use('/item', item);
app.use('/selling', selling);
app.use('/changePassword', changePassword);
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

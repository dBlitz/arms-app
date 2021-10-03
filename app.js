var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

// var indexRouter = require('./api/index');
var object_api = require('./api/object_api');
var index = require('./api/index');

var app = express();
var cors = require('cors')
// var corsOptions = {
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.use('/', index)
app.use('/object', cors(), object_api);
// app.use('/api', organization_api);

app.set('view engine', 'ejs');
app.use(express.static('public'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next(createError(404));
});



// app.use(function(req, res, next) {
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  
// });


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

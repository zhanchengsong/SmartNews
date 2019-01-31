var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var newsRouter = require('./routes/news')
var app = express();
var mongoose = require('mongoose')
var passport = require('passport')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/build/')));
//Mongoose Connection for passport
var config = require('./config/config');

require('./model/main').connect(config.mongoDbUri);
mongoose.set('debug', true)
mongoose.Promise = global.Promise

//Passport initialization
app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_strategy')
var localLoginStrategy = require('./passport/login_strategy')
passport.use('local-signup', localSignupStrategy)
passport.use('local-login',localLoginStrategy)


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
require('dotenv').config();
require('./config/database');
require('./config/passport');


var loginRouter = require('./routes/login');
var landingPageRouter = require('./routes/landingPage');
var usersRouter = require('./routes/users');
var createWorkoutRouter = require('./routes/createWorkout');
var exercisesRouter = require('./routes/exercises');
var pagesRouter = require('./routes/pages');
var kneeRouter = require('./routes/knee');
var lowbackRouter = require('./routes/lowback');
var wristRouter = require('./routes/wrist');
var shoulderRouter = require('./routes/shoulder');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
const isLoggedIn = require('./config/auth');

app.use('/', pagesRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/landingPage', isLoggedIn ,landingPageRouter);
app.use('/createWorkout', isLoggedIn, createWorkoutRouter);
app.use('/exercises', isLoggedIn, exercisesRouter);
app.use('/createWorkout/knee', isLoggedIn, kneeRouter);
app.use('/createWorkout/lowback', isLoggedIn, lowbackRouter);
app.use('/createWorkout/wrist', isLoggedIn, wristRouter);
app.use('/createWorkout/shoulder', isLoggedIn, shoulderRouter);

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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var samurizeRouter = require('./routes/samurize');
var mplplRouter = require('./routes/mplpl');
var videoRouter = require('./routes/video');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mplpl', mplplRouter);
app.use('/samurize', samurizeRouter);
app.use('/users', usersRouter);
app.use('/video', videoRouter);

var serverIndex = require('serve-index');
app.use('/files', serverIndex(
  path.join( __dirname, '/public/html'),{
    icons: false
  }
));

var playRoutes = require('./routes/play');
app.use('/player', playRoutes );

var movieRoutes = require('./routes/movie');
app.use('/movie', movieRoutes );

var movieFilesRoutes = require('./routes/mp4');
app.use('/mp4', movieFilesRoutes );

var uploadRoutes = require('./routes/upload');
app.use('/upload', uploadRoutes );
 
//http://localhost:8000/movie/decode_20.mp4
//http://localhost:8000/mp4/decode_20.mp4

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

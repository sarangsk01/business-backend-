var createError = require('http-errors');
var dotenv = require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const connectDB = require('./connection/db');
connectDB();
// const DB = process.env.MONGO_UI;
mongoose.set('strictQuery', false);

// Mongodb full driver code
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = DB;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

// Mongodb short code
// mongoose
//   .connect(
//     'mongodb+srv://',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((err) => console.log('database not connected'));

// mongodb local database code
// mongoose.connect(
//   'mongodb://127.0.0.1:27017/business',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log(err ? err : 'Connected to database');
//   }
// );
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

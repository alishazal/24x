var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var admin = require('firebase-admin');

var app = express();
// const http = require('http').Server(app);
var http = require('http').Server(app);
//var server = http.createServer(app);

var io = require('socket.io')(http);  //pass a http.Server instance

http.listen(3000);
// server.listen(3001);

// const io = require('socket.io')(http);

var serviceAccount = require('./x-social-anxiety-project-firebase-adminsdk-lvj7d-570c65e90d');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://x-social-anxiety-project.firebaseio.com"
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.get('/chat', function (req, res, next) {
  res.render('chat', { who: req.query.who });
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', message => {
    console.log('message: ' + message);
    //Broadcast the message to everyone
    io.emit('message', message);
  });
});

app.get('/user/listener', function (req, res, next) {
  res.render("listener");
});

app.get('/user/speaker', function (req, res, next) {
  res.render("speaker");
});

// app.listen(3000);
// module.exports = app;
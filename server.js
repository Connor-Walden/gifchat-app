const express = require('express');
const helmet = require('helmet');

const path = require('path');
const sequelize = require('./config');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const port  = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(session({
  secret: 'Dc0d3',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

let socketMap = {};

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
require('./routes')(app);

sequelize.sync({force: false}).then(() => {
  const server = app.listen(port, () => {
    console.info('🌎 > App listening - server: ' + port + ', client: 3000 (proxy)');
  });

  const io = require('socket.io')(server);

  io.on('connection', function (socket) {
    console.log('a user connected');

    // Gets called when the user logs in on the client
    socket.on('init', userId => socketMap = { ...socketMap, [userId]: socket.id } );

    socket.on('get_socketid', function(userId) {
      socket.emit('get_socketid_from_api', socketMap[userId]);
    });

    socket.on('disconnect', function () {
      console.log('User Disconnected');
    });

    socket.on('message_send', function (userId) {
      socket.to(socketMap[userId]).emit('recieve_message');
    });
  });
});

module.exports = app;

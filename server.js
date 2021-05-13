const express = require('express');
const path = require('path');
const sequelize = require('./config');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const port  = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
  secret: 'Dc0d3',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

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

    socket.on('disconnect', function () {
      console.log('User Disconnected');
    });

    socket.on('example_message', function (msg) {
      socket.emit('recieve_message', msg);
    });
  });
});

module.exports = app;

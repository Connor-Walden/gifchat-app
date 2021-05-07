const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const sequelize = require('./config');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const config = require('../config/config');
const webpackConfig = require('../webpack.config');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;

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

// API routes
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

sequelize.sync({force: false}).then(() => {
  const server = app.listen(port, () => {
    console.info('🌎 > App listening on port :' + port);
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

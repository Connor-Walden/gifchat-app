const loginoutRoutes = require('./api/loginoutRoutes');
const userRoutes = require('./api/userRoutes');

module.exports = (app) => {
  // API routes
  app.use('/api', loginoutRoutes);
  app.use('/api', userRoutes);
};

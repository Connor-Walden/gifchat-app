// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
  db: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@fitnesscluster.kft4o.mongodb.net/chatapp_db?retryWrites=true&w=majority`,
  db_dev: 'mongodb://localhost:27017/chatapp_db',
};

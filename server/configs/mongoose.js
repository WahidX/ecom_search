const mongoose = require('mongoose');
const env = require('../configs/environment');

mongoose.connect(
  `mongodb+srv://${db_user}:${db_pass}@cluster0.3yzy4.mongodb.net/${db_name}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting mongodb'));

db.once('open', function () {
  console.log('Connected to mongoDB');
});

module.exports = db;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogApplication');

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error in connecting with database!!')
);

db.once('open', () => {
  console.log('Successfuly connected to the database!!');
});

module.exports = db;

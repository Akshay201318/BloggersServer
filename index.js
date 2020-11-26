const express = require('express');

const port = 8000;

const app = express();

app.use('/', require('./routes'));

app.listen(port, (err) => {
  if (err) {
    console.log('Error in connecting to te server!', err);
  } else {
    console.log('Successfully connected to the server!');
  }
});

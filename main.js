'user strict';

var express = require('express');
  app = express();

app.get('/', (req, res) => {
  res.send('yo')
});

const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});
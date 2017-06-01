const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

app.use(logger('dev'));
app.use(express.static('./client'));

app.listen(1337, function () {
  console.log('Message bus is listening on 1337');
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

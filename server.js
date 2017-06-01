const app = require('express')();
const logger = require('morgan');

app.use(logger('dev'));

app.listen(1337, function () {
  console.log('Message bus is listening on 1337');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

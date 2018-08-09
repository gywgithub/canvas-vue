var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();
var path = require('path');

app.use(express.static('dist'));
app.use(history({ verbose: true, index: '/' }));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

// server
var server = app.listen('23003', (req, res) => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server is running .  http://%s:%s', host, port);
});

module.exports = app;

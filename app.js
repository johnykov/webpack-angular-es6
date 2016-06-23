var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
}); //html5 mode

var server = app.listen(3000, function() {
  console.log('Server running at localhost:3000');
});
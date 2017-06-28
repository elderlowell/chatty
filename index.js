var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on port ' + port + ".");
});

var messages = ["Hello."];

app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
  messages.push(req.body.message);
  res.status(200).json({ messages: messages });
});

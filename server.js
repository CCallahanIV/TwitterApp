// Let's build a server!
var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var crypto = require('crypto');
var OAuth = require('oauth-1.0a');
var request = require('request');


var oauth = OAuth({
  consumer: {
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function: function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

var token = {
  key: 	'2601966127-LyCs6IR0hyYBCOxdzANd9aPu6wox6LZenNLqBRb',
  secret: 	'TQfkG8bOxUy3iC0BTNV3Qi6Agox7TKfrFXTc5Z6xOzdMz'
};

app.get('/searchTwitter', function (req, res){
  //format URL with search prompts
  var request_data = {
    url: 'https://api.twitter.com/1.1/search/tweets.json' + req._parsedUrl.search,
    method: 'GET'
  };
  console.log('Make search request with parameter: ' + req._parsedUrl.search);
  //make GET request of Twitter Search API
  request({
    url: request_data.url,
    type: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    //return received data as text to client
    res.send(body);
  });
});


app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

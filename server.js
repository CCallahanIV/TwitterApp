// Let's build a server!
var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});
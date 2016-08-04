var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('<a href="/about">About</a><br/>');
  res.write('<a href="/blog">Blog</a><br/>');
  res.end();
});

app.get('/About', function(req, res){
  res.send('<h1>About Us</h1>');
});

app.get('/Blog', function(req, res){
  res.send('<h1>Blog</h1>');
});

http.listen(app.get('port'), function(){
  console.log('listening on *:', app.get('port'));
});

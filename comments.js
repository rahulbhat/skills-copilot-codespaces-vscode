// create web server
 // create a web server, using express
const express = require('express');
const app = express();
app.use(express.static('public'));
// create a route
app.get('/comments', function(request, response) {
  response.end('Here are the comments!');
});
// start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
// run the server
// run the server with node comments.js
// visit the server
// visit the server in your web browser at http://localhost:3000
// create a route
// create a route for /comments that sends back a response
// create a route
// create a route for /comments that sends back a response
app.get('/comments', function(request, response) {
  response.end('Here are the comments!');
});
// start the server
// start the server with node comments.js
// visit the server
// visit the server in your web browser at http://localhost:3000/comments
// create a route
// create a route for /comments that sends back a response
app.get('/comments', function(request, response) {
  response.end('Here are the comments!');
});
// create a route
// create a route for /about that sends back a response
app.get('/about', function(request, response) {
  response.end('This is the about page!');
});
// start the server
// start the server with node comments.js
// visit the server
// visit the server in your web browser at http://localhost:3000/about
// create a route
// create a route for /comments that sends back a response
app.get('/comments', function(request, response) {
  response.end('Here are the comments!');
});
// create a route
// create a route for /about that sends back a response
app.get('/about', function(request, response) {
  response.end('This is the about page!');
});
// create a route
// create a route for /hello that sends back a response
app.get('/hello', function(request, response) {
  response.end('Hello, world!');
});
// start the server
// start the server with node comments.js
// visit the server
// visit the server in your web browser at http://localhost:3000/hello
// create a route
// create a route for /comments that sends back a response
app.get('/comments
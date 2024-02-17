// Create web server   
// 1. Load the http module to create an http server.
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = require('./comments.json');
var server = http.createServer(function (request, response) {
    var url_parts = url.parse(request.url);
    if (url_parts.pathname == '/comment') {
        if (request.method == 'POST') {
            var body = '';
            request.on('data', function (data) {
                body += data;
                if (body.length > 1e6) {
                    request.connection.destroy();
                }
            });
            request.on('end', function () {
                var post = qs.parse(body);
                comments.push(post);
                fs.writeFile('comments.json', JSON.stringify(comments), function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
                response.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                response.end('Thanks for the comment\n');
            });
        } else if (request.method == 'GET') {
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.end(JSON.stringify(comments));
        }
    } else {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(data);
            response.end();
        });
    }
});
// 4. Listen on port 8000, IP defaults to
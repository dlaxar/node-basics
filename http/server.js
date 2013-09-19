var http = require('http');

http.createServer(handler).listen(8000);

function handler(request, response) {
	var req = request, res = response;

	res.end('Hello, World!');
}
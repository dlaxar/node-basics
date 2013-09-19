var http = require('http');

// we get passed in request and response
function requestHandler(request, response) {
	var req = request;
	var res = response;

	if(req.url == '/favicon.ico') return res.end();

	var visits = req.headers.cookie.match(/times=(\d+)/);
	visits = (visits) ? parseInt(visits[1]) : 0;

	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Set-Cookie', ['times=' + ++visits]);
	res.write('You have been here ' + visits + ' times');
	res.end();

}

// callback can - of course - be anaynomous
http.createServer(requestHandler).listen(8080);
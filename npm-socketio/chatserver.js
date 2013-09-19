var socketio = require('socket.io');
var http = require('http');

var app = http.createServer(serveIndex);
app.listen(8080)

var io = socketio.listen(app);
io.sockets.on('connection', function onConnection(socket) {
	socket.on('message', function(data) {
		io.sockets.emit('newMessage', data);
	});
});

function serveIndex(req, res) {
	require('fs').readFile(__dirname + '/index.html', function(err, data) {
		if(err) {
			res.writeHead(500);
			res.end('Ups!');
		}

		res.end(data);
	});
}
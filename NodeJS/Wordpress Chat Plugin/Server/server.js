var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	socket.emit('message', { message: 'Welcome to Chat!' });
	socket.on('send', function (data) {
		io.sockets.emit('message', data);
	});
});



var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	socket.join('url')
	socket.emit('message', { message: 'Welcome to Chat!' });
	socket.on('send', function (data) {
		io.sockets.in('url').emit('message', data)

		
	// socket.emit('message', { message: 'Welcome to Chat!' });
// 	socket.on('send', function (data) {
// 		io.sockets.emit('message', data);
	});
});



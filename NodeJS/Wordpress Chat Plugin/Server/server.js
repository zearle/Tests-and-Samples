var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	socket.on('join room', function (room) {
	    socket.join(room);
		socket.roomID = room;
	})
	socket.emit('message', { message: 'Welcome to Chat!' });
	socket.on('send', function (data) {
		io.sockets.in(socket.roomID).emit('message', data)
	});
});



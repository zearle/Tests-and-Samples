var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	socket.on('join room', function (room) {
	    socket.set('room', room);
	    socket.join(room);
	})

	socket.emit('message', { message: 'Test: ' + socket.roomID });
	socket.on('send', function (data) {
		io.sockets.in(socket.roomID).emit('message', data)
	});
});



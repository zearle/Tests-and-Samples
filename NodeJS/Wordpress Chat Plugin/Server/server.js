var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	socket.on('join room', function (room) {
	    socket.join(room);
		socket.set('roomID', room);
	});
	
	socket.emit('message', { message: 'Welcome to Chat!' });
	
	socket.on('send', function (data) {
		socket.get('roomID', function(err, roomID) {
			io.sockets.in(socket.get('roomID')).emit('message', data);
		});
	});
});



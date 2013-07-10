var port = 80;
var io = require('socket.io').listen(port);
io.set("origins","*");


io.sockets.on('connection', function (socket) {ire
	// socket.on('join room', function (room) {
// 	    socket.set('roomID', room, function() { console.log('room ' + room + ' saved'); } );
// 	    socket.join(socket.get('roomID'));
// 	});

	socket.emit('message', { message: 'Welcome to Chat!'});
	socket.on('send', function (data) {
		// io.sockets.in(socket.get('room')).emit('message', data);
		socket.emit('message', data);
	});
});



var port = 80;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
	// socket.on('join room', function (room) {
// 	    socket.set('room', room, function() { console.log('room ' + room + ' saved'); } );
// 	    socket.join(socket.get('room'));
// 	});

	socket.emit('message', { message: 'Welcome to Chat!'});
	socket.on('send', function (data) {
		io.sockets.in(socket.get('room')).emit('message', data);
	});
});



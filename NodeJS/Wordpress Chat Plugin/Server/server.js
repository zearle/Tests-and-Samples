var port = 8080;
var io = require('socket.io').listen(port);
io.set('log level', 1);

io.sockets.on('connection', function (socket) {
	socket.on('join room', function (room) {
	    socket.join(room);
		socket.set('roomID', room, function(roomID){
			console.log(roomID);
		});
	});
	
	socket.emit('message', { message: 'Welcome to Chat!' });
	
	socket.on('send', function (data) {
		socket.get('roomID', function(err, roomID) {
			io.sockets.in(roomID).emit('message', data);
			logdata = roomID + ' - ' + data.username + ': ' + data.message + '\n';
			console.log(logdata);
// 			fs.appendFile('log.txt', logdata, function (err) {});
		});
	});
});



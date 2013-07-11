window.onload = function() {

	var messages = [];
	var socket = io.connect('http://webchattest.nodejitsu.com:80');
	var field = document.getElementById("field");
	var sendButton = document.getElementById("send");
	var chatroom = document.getElementById("chatroom");
	var name = document.getElementById("name");
	var roomID = document.getElementById("roomID");
	
<<<<<<< HEAD
	socket.on('connect', function (data) {
		console.log('Test ' + roomID.value);
		socket.emit('join room', roomID.value);
	});
=======

>>>>>>> 854595dfcd6b6e1433a701a2728302ec66f9abd7

	socket.on('message', function (data) {
		if(data.message) {
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
			chatroom.innerHTML = html;
			chatroom.scrollTop = chatroom.scrollHeight;
		} else {
			console.log("There is a problem:", data);
		}
	});

	sendButton.onclick = sendMessage = function() {
		if(name.value == "") {
			alert("Please type your name!");
		} else {
			socket.emit('send', { message: field.value, username: name.value});
			field.value = "";
		}
	};

}
$(document).ready(function() {
	$("#field").keyup(function(e) {
		if(e.keyCode == 13) {
			sendMessage();
		}
	});
});

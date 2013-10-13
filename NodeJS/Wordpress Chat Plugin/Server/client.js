window.onload = function() {

	var messages = [];
	var socket = io.connect('http://localhost:8080');
	var field = document.getElementById("field");
	var sendButton = document.getElementById("send");
	var chatroom = document.getElementById("chatroom");
	var name = document.getElementById("name");
	var roomID = document.getElementById("roomID");
	
	socket.on('connect', function (data) {
		socket.emit('join room', roomID.value);
	});	

	socket.on('message', function (data) {
		if(data.message && data.length == 1 ) {
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
			chatroom.innerHTML = html;
			chatroom.scrollTop = chatroom.scrollHeight;
		} else if(data[0].message){
			for (var i = data.length - 1; i >= 0; i--) {
			    messages.push(data[i]);
				var html = '';
			}
			for(var i=0; i<messages.length; i++) {
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
				html += messages[i].message + '<br />';
			}
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

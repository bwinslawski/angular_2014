﻿var dane = 0;
function editV(elo){
	console.log(elo);
	$( "#tabelka" ).remove();
	}

	
//Create a chat module to use.
(function () {


  window.Chat = {
    socket : null,
  
    initialize : function(socketURL) {
      this.socket = io.connect(socketURL);

      //Send message on button click or enter
      $('#send').click(function() {
		gjoon();
		//Chat.send();
      });

      $('#message').keyup(function(evt) {
        if ((evt.keyCode || evt.which) == 13) {
          
		  gjoon();
         // Chat.send();
		  return false;
        }
      });

      //Process any incoming messages
      this.socket.on('new', this.add);
    },

    //Adds a new message to the chat.
    add : function(data) {
     /* var name = data.name || 'anonymous';
      var msg = $('<div class="msg"></div>')
        .append('<span class="name">' + name + '</span>: ')
        .append('<span class="text">' + data.msg + '</span>');

      $('#messages')
        .append(msg)
        .animate({scrollTop: $('#messages').prop('scrollHeight')}, 0);
    */
	//dodajTablice(data);
	},
 
    //Sends a message to the server,
    //then clears it from the textarea
    send : function() {
      this.socket.emit('msg', {
        name: $('#message').val(),
        msg: $('#message').val()
      });

      $('#message').val('');

      return false;
    }
  };
}());
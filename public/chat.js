var dane = 0;

function cancelUser()  {
		//$( ".edit" ).remove();
		var pol = document.getElementById('imgData').value;
	console.log(pol);
		}

function editV(elo){
	console.log(elo);
	$( "#tabelka" ).remove();
	var elo = ""; 
	//<input type="text" class="id" value="Text input">
	}
//Create a chat module to use.
(function () {


  window.Chat = {
    socket : null,
  
    initialize : function(socketURL) {
      this.socket = io.connect(socketURL);

	  function send(lol)  {
		$( ".edit" ).remove();
		}
      //Send message on button click or enter
      $('#send').click(function() {
	  Chat.send("save");
	  
      });

      $('#save').keyup(function(evt) {
        if ((evt.keyCode || evt.which) == 13) {
         Chat.send();
		  return false;
        }
      });

      //Process any incoming messages
      this.socket.on('new', this.add);
    },

    //Adds a new message to the chat.
    add : function(data) {
	
	
	timedRefresh();
	
	
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
    send : function(data) {
	if(data=="save"){
	this.socket.emit('save', {
        name: data,
        id: document.getElementById('idU').value,
		mi: $('.mil').val(),
		tit: $('.tit').val(),
		pri: $('.pri').val(),
		des: $('.des').val(),
		imgdata: document.getElementById('imgData').value,
		year: $('.year').val()
      });
	}
	else if(data=="add"){
	this.socket.emit('add', {
        name: data,
        id: document.getElementById('idU').value,
		mi: $('.mil').val(),
		tit: $('.tit').val(),
		pri: $('.pri').val(),
		des: $('.des').val(),
		imgdata: document.getElementById('imgData').value,
		year: $('.year').val()
      });
	}
	else
      this.socket.emit('del', {
        name: data,
        msg: $('#message').val()
      });

      $('#message').val('');

      return false;
    }
	
  };
}());
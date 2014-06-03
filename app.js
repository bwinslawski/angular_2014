var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');

var file = __dirname + '/public/data.json';
 


var outputFilename = 'public/data.json';
io.sockets.on('connection', function (socket) {
  socket.on('del', function (data) {
  var data2;
  fs.readFile(file, 'utf8', function (err, data1) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
 
  data2 = JSON.parse(data1);
  data2.vid.forEach(function(item,index) 
  { 
  if(item.id==data.name.id){
  console.log(item);
  data2.vid.splice(index,1);
  //delete data2.vid[index];
  }
  })
  for(var key in data2.vid) {
    console.log("The value of " + key + " is " + data2.vid[key]);
}
  
  
  //delete data2.vid[idx].id;
 fs.writeFile(outputFilename, JSON.stringify(data2, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
	}); 
  
});
	
    io.sockets.emit('new', data);
  });
});

server.listen(80);

app.use("/", express.static(__dirname + '/public'));




					

io.sockets.on('connection', function (socket) {
  socket.on('msg', function (data) {
    io.sockets.emit('new', data);
  });
});
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/listener', function(req, res) {
  res.sendFile(__dirname + '/listener.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('audioMessage', function(msg) {
    io.emit('listenToMessage', msg);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function(data) {
    console.log(data);
  });
  // socket.on('audioMessage', function(msg) {
  //   console.log('this is message', msg);
  //   io.emit('audioMessage', msg);
  // });
  // socket.on('receivemessage', function(from, msg) {
  //   console.log('received msg from ', from, 'saying ', msg);
  // });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

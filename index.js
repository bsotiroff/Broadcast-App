const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const path = require('path');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// }); // Send index.html for any other requests

app.use(express.static('public'));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('audioMessage', function(msg) {
    io.emit('listenToMessage', msg);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

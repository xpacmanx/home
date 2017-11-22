'use strict'

var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(8000, function () {
    console.log('listening on *:8000');
});

var now = 0;

io.on('connection', function (client) {
    console.log('Client connected...');

    client.emit('now', now);

    client.on('setLight',function(value){
        io.emit('light',value);
    })

});
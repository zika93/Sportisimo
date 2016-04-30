var port = 4000;
var io = require('../../nodejs/node_modules/socket.io')(port);
if(io)
    console.log('Server running on port: '+port);
io.sockets.on('connection', function (socket) {
    socket.on("new_message",function(data)
    {
        io.sockets.emit("receive_new_message",data);
    });
});
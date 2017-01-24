var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function (socket) {
    console.log("=====co nguoi vua ket noi====" + socket.id);
    socket.on("client-send-bgcolor",function(data){
        console.log("recieved: " + data);
        io.socket.emit("server-send-bgcolor",data);
    })
});
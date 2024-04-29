//import express module
const express = require('express');
//create an instance/object of express
const app = express();
//import http module
const http = require('http');
//create a http server instance or object using express objext
const server = http.createServer(app);
//imprt the server closs from socket.io
const {Server} = require("socket.io");
//createing a new object of server class and pass it the http server
const io = new Server(server);

//gets the html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// event listener for connection
io.on('connection', (socket)=>{
    //logging a message when a user connects
    console.log('a user connected');
    //listener for chat message from client side
    socket.on('chat message', (msg) =>{
        //logging recieved message
        console.log('message: '+ msg);
        // broad cast  messeage
        io.emit('chat message', msg);       
    });
});

server.listen(3000, ()=> {
    //server start on port 3000
    console.log('listening on *:3000');
});

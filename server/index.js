const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const buttonCounters = {};
const users = {};

io.on("connection", (socket) => {
  console.log(socket.id);
 
  socket.on("join_room", (room, user) => {
    
    socket.join(room);
    const numUsers = io.sockets.adapter.rooms.get(room).size;

  // Verifica se a sala está cheia
    if(numUsers > 2){
      socket.leave(room);
      socket.emit("room_full" , "Room is full");
      
    } else{
      socket.emit("numUsers", numUsers);
      buttonCounters[room] = 0;
      console.log(numUsers);
      
      users[socket.id] = user;
      const roomUsers = [];
      io.sockets.adapter.rooms.get(room).forEach((socketId) => {
        roomUsers.push(users[socketId]);
      });
      io.in(room).emit('update_users', roomUsers);
      console.log(roomUsers)
      
    };
  });

  // Quando um usuário sai da sala
  socket.on("leave_room", (room) => {
    socket.leave(room);
    delete users[socket.id];
    const roomUsers = [];

    if(socket.adapter.rooms.get(room)){

      io.sockets.adapter.rooms.get(room).forEach((socketId) => {
        roomUsers.push(users[socketId]);
      });
      io.in(room).emit('update_users', roomUsers);
      
    }
    
  });

  socket.on("button_pressed", (room) => {
    // Incrementa o contador de botão para a sala
    buttonCounters[room]++;

    // Verifica se todos os usuários pressionaram o botão
    const numUsers = io.sockets.adapter.rooms.get(room).size;
    if (buttonCounters[room] === numUsers) {
      // Todos os usuários pressionaram o botão, então emita um evento e dispara a função desejada
      io.in(room).emit("all_buttons_pressed");
      // Dispara a função aqui
    }
  });
});

  

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
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
      socket.room = room;
      
      users[socket.id] = user;
      const roomUsers = [];
      io.sockets.adapter.rooms.get(room).forEach((socketId) => {
        roomUsers.push(users[socketId]);
      });
      io.in(room).emit('update_users', roomUsers);
      io.in(room).emit("numUsers", numUsers);
    
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
      const numUsers = io.sockets.adapter.rooms.get(room).size;
      io.in(room).emit("numUsers", numUsers);
    }
    
  });

  // Quando um usuário desconecta
  socket.on("disconnect", () => {
    if (socket.room) {
      socket.leave(socket.room);
      delete users[socket.id];
      const roomUsers = [];
      if(io.sockets.adapter.rooms.get(socket.room)){
        io.sockets.adapter.rooms.get(socket.room).forEach((socketId) => {
          roomUsers.push(users[socketId]);
        });
        io.in(socket.room).emit('update_users', roomUsers);
        const numUsers = io.sockets.adapter.rooms.get(socket.room).size;
        io.in(socket.room).emit("numUsers", numUsers);
      }
    }
  });

  // Mandar as cores para o outro usuário
  socket.on("colors", (color1, color2) => {
    const colors = color1.concat(color2).filter((item, index, self) => self.indexOf(item) === index);
    console.log(colors);
    socket.to(socket.room).emit("colors", colors);
  });

  socket.on("button_pressed", () => {
    // Incrementa o contador de botão para a sala
    buttonCounters[socket.room]++;
    // Verifica se todos os usuários pressionaram o botão
    if(io.sockets.adapter.rooms.get(socket.room)){
    const numUsers = io.sockets.adapter.rooms.get(socket.room).size;
    if (buttonCounters[socket.room] === numUsers) {
      // Todos os usuários pressionaram o botão, então emita um evento e dispara a função desejada
      io.in(socket.room).emit("all_buttons_pressed");
      buttonCounters[socket.room] = 0;
    }
    }
  });
});

  

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
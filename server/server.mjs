import express from "express";
const app = express();
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const buttonCounters = {};
const users = {};
const currentHost = {};

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (room, user) => {
    socket.join(room);
    const numUsers = io.sockets.adapter.rooms.get(room).size;
    if (numUsers === 1) {
      currentHost[room] = socket.id;
      socket.isHost = true;
      socket.emit("host", true);
    } else {
      socket.isHost = false;
      socket.emit("host", false);
    }

    // Verifica se a sala está cheia
    if (numUsers > 2) {
      socket.leave(room);
      socket.emit("room_full", "Room is full");

    } else {
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

    if (socket.adapter.rooms.get(room)) {

      io.sockets.adapter.rooms.get(room).forEach((socketId) => {
        roomUsers.push(users[socketId]);
      });

      io.in(room).emit('update_users', roomUsers);
      const numUsers = io.sockets.adapter.rooms.get(room).size;
      io.in(room).emit("numUsers", numUsers);

      if (socket.isHost) {
        socket.isHost = false;
        socket.emit("host", false);
        const newHost = io.sockets.adapter.rooms.get(room).values().next().value;
        currentHost[room] = newHost;
        io.to(newHost).emit("host", true);
      }
    }

  });

  // Quando um usuário desconecta
  socket.on("disconnect", () => {
    if (socket.room) {

      socket.leave(socket.room);
      delete users[socket.id];
      const roomUsers = [];

      if (io.sockets.adapter.rooms.get(socket.room)) {

        io.sockets.adapter.rooms.get(socket.room).forEach((socketId) => {
          roomUsers.push(users[socketId]);
        });
        io.in(socket.room).emit('update_users', roomUsers);
        const numUsers = io.sockets.adapter.rooms.get(socket.room).size;
        io.in(socket.room).emit("numUsers", numUsers);

        if (socket.isHost) {
          socket.isHost = false;
          socket.emit("host", false);
          const newHost = io.sockets.adapter.rooms.get(socket.room).values().next().value;
          currentHost[socket.room] = newHost;
          io.to(newHost).emit("host", true);
        }
      }
    }
  });

  // Mandar as cores para o outro usuário
  socket.on("colors", (color1, color2) => {
    const colors = color1.concat(color2).filter((item, index, self) => self.indexOf(item) === index);
    socket.to(socket.room).emit("colors", colors);
  });

  //Começar o jogo
  socket.on("start", () => {
    
    if(socket.filter === undefined) {
      socket.filter = ["Creature", "Instant", "Sorcery", "Enchantment", "Artifact", "Planeswalker Legendary",]
    }
    console.log(socket.filter);
    io.in(socket.room).emit("start", socket.filter);
    
  });

  socket.on("filter", (filter) => {
    socket.filter = filter;
  });

});



server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
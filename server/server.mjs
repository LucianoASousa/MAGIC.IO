import express from "express";
const app = express();
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors());

const PORT = process.env.PORT || 3001;

const server = createServer(app);

const io = new Server(server,
  {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
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
    if(socket.types === undefined || socket.types[0] === undefined) {
      socket.types = ["Creature", "Instant", "Sorcery", "Enchantment", "Artifact", "Planeswalker Legendary"];
      
    }if(socket.formats === undefined || socket.formats[0] === undefined) {
      socket.formats = ["historic"];
    }
    console.log(socket.types, socket.formats);

    io.in(socket.room).emit("start", socket.types, socket.formats[0]);
    
  });

  socket.on("filter", ( types, formats) => {
    socket.types = types;
    socket.formats = formats;

  });

});

app.get('/', (req, res) => {
  res.json({status: 'Server is running!'})
})

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING, PORT: ", PORT);
});
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
// const Chat = require('./Model/Messages')
// require('./Connection/db')
app.use(cors());
app.use(express.json);

const server = http.createServer(app);
const io = new Server(server, {
  cors: "http://localhost:3000",
  methods: ["GET", "POST"],
});

io.on("connection", (Socket) => {
  console.log(Socket.id);
  Socket.on("join_room", (id) => {
    Socket.join(id);
    console.log(`User ${Socket.id} is Joined ${id}`);
  });

  Socket.on("send_message", async (data) => {
    //  const SaveMsg =    await Chat.create(data)
    // if (SaveMsg) {
    //   let GetAll = await Chat.find({});
      Socket.to(data.room).emit("receive_message", data);
      //  Socket.to(data.room).emit('Chat',GetAll)
    // }
  });
});

io.on("disconnect", (Socket) => {
  console.log(Socket.id, "is disconnected");
});
app.get("/mes", (req, res) => {
  res.send("Hello");
});

server.listen(3300, () => {
  console.log("Server is Running on Port 3300");
});

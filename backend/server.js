const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("what is scoket:", socket);
  console.log("socket is active");

  socket.on("chat", (payload) => {
    console.log("what is payload ", payload);
    io.emit("chat", payload);
  });
});

// app.listen(5000, () => console.log("server is active"))

server.listen(5000, () => console.log("server is active at 5000...."))
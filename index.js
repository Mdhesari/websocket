let express = require("express");
let socket = require("socket.io");

let app = express();
let server = app.listen(4000, () => {
  console.log("Listenning to requests on port 4000");
});

app.use(express.static("public"));

let io = socket(server);

io.on("connection", socket => {
  console.log("the connection was made", socket.id);

  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", text => {
    socket.broadcast.emit("typing", text);
  });

  socket.on("typing-r", text => {
    socket.broadcast.emit("typing-r", text);
  });
});

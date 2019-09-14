// in the name of allah
let socket = io.connect("http://localhost:4000");

let output = document.getElementById("output"),
  handle = document.getElementById("handle"),
  message = document.getElementById("message"),
  btn = document.getElementById("btn"),
  feedback = document.getElementById("feedback");

btn.addEventListener("click", e => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keydown", () => {
  socket.emit("typing", handle.value);
});

message.addEventListener("keyup", () => {
  socket.emit("typing-r", handle.value);
});

socket.on("typing", text => {
  feedback.innerHTML = "<p>" + text + " is typing...";
});

socket.on("typing-r", text => {
  setTimeout(() => {
    feedback.innerHTML = "";
  },1000);
});

socket.on("chat", data => {
  output.innerHTML +=
    "<p><strong> " + data.handle + " </strong> " + data.message + "</p>";
});

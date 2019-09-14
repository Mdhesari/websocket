// in the name of allah
let socket = io.connect("http://localhost:4000");

let output = document.getElementById("output"),
  handle = document.getElementById("handle"),
  message = document.getElementById("message"),
  btn = document.getElementById("btn");

btn.addEventListener("click", e => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

socket.on("chat", data => {
  output.innerHTML +=
    "<p><strong> " + data.handle + " </strong> " + data.message + "</p>";
});

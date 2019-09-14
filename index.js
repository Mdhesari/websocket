let express = require("express");

let app = express();
let server = app.listen(4000, () => {
  console.log("Listenning to requests on port 4000");
});

app.use(express.static('public'));

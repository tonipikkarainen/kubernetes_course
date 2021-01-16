const express = require("express");
const app = express();
const port = 3002;

var counter = 0;

app.get("/", (req, res) => {
  res.send("Pong: " + counter);
  counter++;
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

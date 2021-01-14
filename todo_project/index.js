const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("html/index.html", { root: __dirname });
  //res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started in port${port}`);
});

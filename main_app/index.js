const express = require("express");
const app = express();
const port = 3001;
const uuid = require("uuid");

const randomString = uuid.v4();
var status = "";

const printRandomString = () => {
  status = Date(Date.now()).toLocaleString() + ": " + randomString;
  console.log(status);
  setTimeout(printRandomString, 5000);
};

printRandomString();

app.get("/", (req, res) => {
  res.send(status);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

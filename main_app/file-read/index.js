const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3001;

const directory = path.join("/", "tmp", "src", "app", "files");
const filePath = path.join(directory, "status.txt");

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.promises
      .readFile(filePath)
      .then((result) => {
        resolve(result.toString("utf-8"));
      })
      .catch((err) => {
        resolve(err.toString("utf-8"));
      });
  });
};

app.get("/", (req, res) => {
  readFile().then((content) => {
    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

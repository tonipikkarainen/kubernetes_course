const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

const randomString = uuid.v4();
var status = "";
const directory = path.join("/", "tmp", "src", "app", "files");
const filePath = path.join(directory, "status.txt");

const storeRandomString = () => {
  status = Date(Date.now()).toLocaleString() + ": " + randomString;
  console.log(status);
  setTimeout(storeRandomString, 5000);
  fs.promises
    .mkdir(directory, { recursive: true })
    .then(() => {
      fs.promises.writeFile(filePath, status);
    })
    .catch((err) => {
      console.log(err);
    });
};

storeRandomString();

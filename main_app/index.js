const uuid = require("uuid");

const randomString = uuid.v4();

const printRandomString = () => {
  console.log(new Date(Date.now()).toLocaleString() + ": " + randomString);
  setTimeout(printRandomString, 5000);
};

printRandomString();

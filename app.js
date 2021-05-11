const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");

const port = 3000;

app.use(express.json());

let content;
fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log("ERR");
  }
  content = data.toString();
  console.log(content);
});



fs.writeFile("data.txt", "A new file has been created", (err) => {
  if (err) {
    console.log("ERR");
  }
});

app.listen(port, () => {
  console.log(`practice app listening at http://localhost:${port}`);
});

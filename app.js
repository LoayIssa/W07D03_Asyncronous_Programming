const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");

const port = 3000;

app.use(express.json());

const readFile =()=>{
  let content;
  fs.readFile("./data.txt", (err, data) => {
    if (err) {
      console.log("ERR");
    }
    content = data.toString();
    console.log(content);
  });
}



const writeFile =()=>{

  fs.writeFile("data.txt", "A new file has been created", (err) => {
    if (err) {
      console.log("ERR");
    }
  });
}



const getPost = (id) => {
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => {
    console.log(response.data);
    res.json(response.data);

  })
  .catch((err) => {
   console.log("ERR")
  });
};


const getPostAsync = async (data) => {
    try {
        const response = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/`)
        console.log(response.data)
    }catch (err) {
        throw err;
      }
}; 

app.listen(port, () => {
  console.log(`practice app listening at http://localhost:${port}`);
});

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
//readFile()



const writeFile =()=>{

  fs.writeFile("data.txt", "A new file has been created", (err) => {
    if (err) {
      console.log("ERR");
    }
  });
}
//writeFile()



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
//getPost(1);


const getPostAsync = async (data) => {
    try {
        const response = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/`)
        console.log(response.data)
    }catch (err) {
        throw err;
      }
}; 
//getPostAsync(10)
//practice 1
const appendToFile  = (data) =>{
  appendFile('data.txt', `${data}`, (err) => {
    if (err) {
      console.log("ERR")
    }
    console.log('The "data to append" was appended to file!');
  });
}
//practice 2

const copyFile = (fileName) => {
  function callback(err) {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  }

  fs.copyFile(`${fileName}`, "copy_of_data.txt", callback);
};
//copyFile("text.txt");

//practice 3 
const newPost = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});

const createPost = (post) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then(function (response) {
      console.log(response.data);
      return response.data;

    })
    .catch(function (error) {
      console.log(error);
    });
};
//createPost(newPost)

//practice 4

const newPost1 = JSON.stringify({
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (id, data) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
//updatePost(5, newPost);
//practice 5 

const getUsers  = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/Users"
    );
    console.log(response.data);
  } catch (err) {
    throw err;
  }
};
//getUsers();

//practice 6
const saveUsers = async () => {
  try {
  
  const allUsers = await(getUsers()) 
   fs.writeFile("users.txt",JSON.stringify(allUsers), (err) => {
      if (err) {
        console.log("Err")
      }
      console.log("The file has been saved");
    });
  } catch (err) {
      throw err;
    }
}
saveUsers()




app.listen(port, () => {
  console.log(`practice app listening at http://localhost:${port}`);
});

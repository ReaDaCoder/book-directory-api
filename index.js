import express from 'express';
import multer from 'multer';
const upload = multer();
import { v4 as uuidv4 } from 'uuid';
import fs from 'node:fs';



//import http from require('http');

// const app = express();

// const server = http.createServer((req, res)=>{
//     console.log('make a request');
//     res.end('Server response');
// });

// server.listen(4000, 'localhost', () =>{
//     console.log('testing server');
// })



const router = express.Router();


const app = express();
const port = 3000;


let bookInfo = [

]

app.get('/books', (req, res) => {
  res.send(bookInfo);
});


app.post('/books', upload.none(), (req, res) => {
    const {title, author,publisher,date,ISBN} = req.body;
  
    bookInfo.push({title, author,publisher,date,ISBN, id: uuidv4() });
  
    res.send(`${title} has been added to the shopping list`);
  })

  fs.readFile('/books', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
  
    books = books.filter((user) => user.id !== id)

    res.send(`${id} deleted successfully from database`);
  })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});






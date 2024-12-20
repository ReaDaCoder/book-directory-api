import express from 'express';
import multer from 'multer';
const upload = multer();
import { v4 as uuidv4 } from 'uuid';
import fs from 'node:fs';
import { finished } from 'node:stream/promises';



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
const port = 3001;


let bookInfo = [

]

app.get('/books', (req, res) => {
  res.send(bookInfo);
});


app.post('/books', upload.none(), (req, res) => {
  console.log(req.body)
    const {title, author,publisher,date,ISBN} = req.body;
  
    bookInfo.push({title, author,publisher,date,ISBN, id: uuidv4() });
  
    res.send(`${title} has been added to the book directory list`);

    let storedBooks = JSON.stringify(books, null, 2);
    fs.writeFile('books.json'. storedBooks, finished);
    function finished(err){
      console.log('all set.');
    }
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






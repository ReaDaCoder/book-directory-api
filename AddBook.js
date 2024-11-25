const multer  = require('multer')
const upload = multer()

import axios from 'axios';
 
axios.post('http://localhost:3000/',{
     bookInfo: 
        {
            title:'',
            author:"",
            publisher:'',
            date:'',
            ISBN:''
        }
    
})
.then(res=>{
    console.log(`statusCode: ${res.status}`);
    console.log(res);
})

const axios = require('axios');

axios
  .get('http://localhost:3000/')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

  const axios = require('axios');

  axios
    .post('http://localhost:3000/', {
    
    })
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });


    axios
    .patch('http://localhost:3000/', {
    
    })
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });
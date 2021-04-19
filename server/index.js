const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const signupController = require('./controllers/signup');
const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(cors())
    .use('/signup',signupController)
    .use((error, req, res, next)=>{
      res.status(error.code || 500 );
      res.send( { msg: error.msg });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
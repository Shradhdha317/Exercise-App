
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
 

    .use((error, req, res, next)=>{
      console.error(error);

        res.status(error.code || 500 );
        res.send( { msg: error.msg });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
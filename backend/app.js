const express = require('express');
const app = express();
require('dotenv').config()

app.use("/",(req,res,next)=>{
  res.send('hello world')
  next()
})

const PORT = 6000;

app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
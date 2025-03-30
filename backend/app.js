const express = require('express');
const app = express();
const notesRouter = require('./routes/notesRouter')
const cors = require('cors')

require('dotenv').config()
require('./config/db')

app.use(express.json())

app.get("/",(req,res,next)=>{
  res.send('hello world')
});

app.use(cors())
app.use(notesRouter)

const PORT = process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
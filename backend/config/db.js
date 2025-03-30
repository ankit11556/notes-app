const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("mongo connect");
})
.catch((error)=>{
  console.log("mongo not connected",error);
})
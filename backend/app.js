const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
    console.log("Database connected")
})
.catch(err=>{
    console.log(err);
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT}`)
});


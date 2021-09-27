import express from 'express'
import mongoose from 'mongoose'
import Twitter from './API/Twitter.js'
import Giphy from './API/Giphy.js'

const app=express()
app.use(express.json())
const port=process.env.PORT||8080
const mongodbUrl="mongodb://localhost:27017/VogueNewscast"
//Twitter()
//Giphy()

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected");
  });


app.listen(port,()=>{
    console.log("server started")
})
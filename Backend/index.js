import express from 'express'
import mongoose from 'mongoose'
import Twitter from './API/Twitter.js'
import Giphy from './API/Giphy.js'
import Youtube from './API/Youtube.js'

const app=express()
app.use(express.json())
const port=process.env.PORT||8080
const mongodbUrl="mongodb://localhost:27017/VogueNewscast"
Twitter()
Giphy()
//Youtube()

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected");
  });

import Signup from './Calls/Signup.js'
app.use('/Signup',Signup)

import getTweets from './Calls/GetTweets.js'
app.use('/Tweets',getTweets)

import GetGiphy from './Calls/GetGiphy.js'
app.use('/GetGiphy',GetGiphy)

app.listen(port,()=>{
    console.log("server started")
})
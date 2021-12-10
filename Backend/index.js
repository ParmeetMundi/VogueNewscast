import express from 'express'
import mongoose from 'mongoose'
import Twitter from './API/Twitter.js'
import Giphy from './API/Giphy.js'
import Youtube from './API/Youtube.js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express()
app.use(express.json())
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin ,X-Requested-With,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

dotenv.config({path:'./config.env'})

const port=process.env.PORT||8080
const mongodbUrl=process.env.DATABASE


mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;

console.log(process.env.YoutubeKey)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected");
   Twitter()
   Giphy()
   Youtube()
  });
//console.log(__dirname)
import Signup from './Calls/Signup.js'
app.use('/Signup',Signup)

import getTweets from './Calls/GetTweets.js'
app.use('/Tweets',getTweets)

import GetGiphy from './Calls/GetGiphy.js'
app.use('/GetGiphy',GetGiphy)

import GetMusic from './Calls/GetMusic.js'
app.use('/GetMusic',GetMusic)

import GetGames from './Calls/GetGames.js'
app.use('/GetGames',GetGames)

import GetHome from './Calls/GetHome.js'
app.use('/',GetHome)

if ( process.env.NODE_ENV == "production"){

   app.use(express.static(path.join(__dirname, 'FrontEnd/build')));
   app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd/build', 'index.html'));
  });

}



app.listen(port,()=>{
    console.log("server started")
})
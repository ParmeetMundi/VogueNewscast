import { Router } from "express";
const route=Router()
import {youtubeIdsGames} from '../Trends.js'


route.get('/',(req,res)=>{
   res.send(youtubeIdsGames)
})

export default route

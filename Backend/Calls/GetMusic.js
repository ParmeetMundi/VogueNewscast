import { Router } from "express";
const route=Router()
import {youtubeIdsMusic} from '../Trends.js'


route.get('/',(req,res)=>{
   res.send(youtubeIdsMusic)
})

export default route

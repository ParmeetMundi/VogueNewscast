import { Router } from "express";
import { giphyUrls,youtubeIdsMusic,tweets } from "../Trends.js";
const route=Router()

route.get('/',(req,res)=>{
    const combine=[]
    combine.push(tweets.slice(0,5))
    combine.push(giphyUrls.slice(0,5))
    combine.push(youtubeIdsMusic.slice(0,5))
    res.send(combine)

})


export default route
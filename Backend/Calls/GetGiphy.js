import { Router } from "express";
import { giphyUrls } from "../Trends.js";
const route=Router()

route.get('/',(req,res)=>{

    res.send(giphyUrls)

})


export default route
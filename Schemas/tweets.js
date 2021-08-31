import mongoose from "mongoose";


const tweets=mongoose.Schema({
        hashtag:{
            type:String,
            required:true,
            unique:true
        },
        ids=[]
})




export default tweets
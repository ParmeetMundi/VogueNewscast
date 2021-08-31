import mongoose from "mongoose";


const Tweet=mongoose.Schema({
        hashtag:{
            type:String,
            required:true,
            unique:true
        },
        ids:[]
})




export default mongoose.model("Tweet",Tweet)
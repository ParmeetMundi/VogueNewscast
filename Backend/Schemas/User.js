import mongoose from 'mongoose'



const User=new mongoose.Schema({
      _id:{
         type:String,
         required:true
      },

      name:{
          type:String,
          required:true
      },

      email:{
          type:String,
          required:true
      },

      imageUrl:{
          type:String
      },

      created:{
          type:Date,
          default:new Date()
      }

})


export default mongoose.model('User',User)
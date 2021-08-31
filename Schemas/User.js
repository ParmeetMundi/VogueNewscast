const mongoose=require('mongoose')



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


module.exports=User
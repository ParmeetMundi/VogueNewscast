import { Router } from "express"
const route=Router()
import user from '../Schemas/User.js'

route.post('/',async(req,res)=>{
  
     const NewUser=new user({
         _id:req.body.id,
         name:req.body.name,
         email:req.body.email,
         imageUrl:req.body.imageUrl,
     })

     //await NewUser.save()

     res.send(await NewUser.save())

})

export default route
import giphy from 'giphy-api'

const Giphy=()=>{

 const G=giphy('6GkICIMCCRzhrk1R4IjrsRkpfNcJEXWe')

 getStickers(G)
 

}


const getStickers=(G)=>{

   { 
       G.search({q:'farmer protest',limit:'1'},(err,res)=>{
        console.log((res.data)[0].images)
    })
   }
}


export default Giphy;



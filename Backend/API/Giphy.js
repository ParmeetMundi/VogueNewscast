import giphy from 'giphy-api'
import Trends from '../Trends.js'
import {giphyUrls} from '../Trends.js'

const Giphy=()=>{

 const G=giphy('6GkICIMCCRzhrk1R4IjrsRkpfNcJEXWe')

 getStickers(G)
 

}


const getStickers=async (G)=>{

       
       for(var i=0;i<2;i++)
       {   var urls=[]
           await G.search({q:Trends[i],limit:'2'},(err,res)=>{
                console.log(res)
                // for(var j=0;j<(res.data).length;j++){
                //     console.log((res.data)[i].images.original.url)
                //     urls.push((res.data)[i].images.original.url)
                // }

                // giphyUrls.push({"hastag":Trends[i],"Urls":urls})

           })
       }
   
}


export default Giphy;


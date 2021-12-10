import giphy from 'giphy-api'
import Trends from '../Trends.js'
import {giphyUrls} from '../Trends.js'

const Giphy=()=>{

 const G=giphy(process.env.giphyKey)

 getStickers(G)
 

}


const getStickers=async (G)=>{

    giphyUrls.length=0
   
    //    for(var i=0;i<3;i++)
    //    {        
           await G.trending({limit:'20'}).then((res)=>{
                const data=res.data
                var urls=[]
                console.log(res)
                 for(var j=0;j<data.length;j++){
                     
                    // console.log(res.data[j].url)
                     urls.push((res.data)[j].images.original.url)
                     giphyUrls.push((res.data)[j].images.original.url) 
                    }   
                
                  

           }
           )
           
    //    }
       
   
}


export default Giphy;



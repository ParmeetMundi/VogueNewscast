const key="";
import {google} from 'googleapis'
import {youtubeIds} from '../Trends.js'

const youtube=google.youtube({
    auth:key,
    version:'v3'
})


const Youtube=()=>{

    getVedios()
    setInterval(()=>getVedios(),1000*60*60) 
}



const getVedios=async ()=>{
    
    try{
        await youtube.videos.list({
        'part':['snippet'],
        'chart':'mostPopular',
        'maxResults':'10',
        'regionCode':'IN'
    },(err,res)=>{
        if(err)
        console.log(err);
        else{
              youtubeIds.length=0
              const videos=res.data.items
              for(var i=0;i<10;i++){
                    youtubeIds.push(videos[i].id)
               }
              console.log(youtubeIds)
        }
          
    })
    }catch(err){
        console.log(err)
    }
  

}


export default Youtube;
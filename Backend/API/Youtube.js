

import {google} from 'googleapis'
import {youtubeIdsMusic,youtubeIdsGames} from '../Trends.js'



//const key=process.env.YoutubeKey


//console.log(process.env.YoutubeKey)
  

const Youtube=()=>{

    const youtube=google.youtube({
    
        auth:process.env.YoutubeKey,
        version:'v3'
    }) 


    getMusic(youtube)
    setInterval(()=>getMusic(youtube),1000*60*60) 

    getGames(youtube)
    setInterval(()=>getGames(youtube),1000*60*60) 
}



const getMusic=async (youtube)=>{
    
    try{
        await youtube.videos.list({
        'part':['snippet'],
        'chart':'mostPopular',
        'maxResults':'20',
        'regionCode':'IN',
        'videoCategoryId':'10'
    },(err,res)=>{
        if(err)
        console.log(err);
        else{
              youtubeIdsMusic.length=0
              const videos=res.data.items
              for(var i=0;i<10;i++){
                youtubeIdsMusic.push(videos[i].id)
               }
            //  console.log(youtubeIdsMusic)
        }
          
    })
    }catch(err){
        console.log(err)
    }
  

}

const getGames=async (youtube)=>{
    
    try{
        await youtube.videos.list({
        'part':['snippet'],
        'chart':'mostPopular',
        'maxResults':'10',
        'regionCode':'IN',
        'videoCategoryId':'20'
    },(err,res)=>{
        if(err)
        console.log(err);
        else{
            youtubeIdsGames.length=0
              const videos=res.data.items
              for(var i=0;i<10;i++){
                youtubeIdsGames.push(videos[i].id)
               }
             // console.log(youtubeIdsGames)
        }
          
    })
    }catch(err){
        console.log(err)
    }
  

}


export default Youtube;
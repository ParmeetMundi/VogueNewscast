import React,{useEffect,useState,useContext} from 'react';
import { getAuth } from '@firebase/auth';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import './youtubeEmbed.css'
import { AuthContext } from './CurrentAuth';


const Games = () => {
    const {gamesIds} = useContext(AuthContext)
    const auth=getAuth()
   
    const games=()=>{
        return (<div className="curr_aff_main">
           {gamesIds.map((id)=>{

             return(
                 <div className="y_div">
                 <LiteYouTubeEmbed width='100%' id={id} title='' />
                 </div>)
            }) 
            }
        </div>);
    }
    
  

   return <div  >

              {auth.currentUser!=null?games():<h1>Login To Use This Service</h1>}
              
            
    </div>;
}


export default Games;
import React,{useEffect,useState,useContext} from 'react';
import { auth } from './firebase';
import { AuthContext } from './CurrentAuth';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import './youtubeEmbed.css'


const Music = () => {
    
    const {musicIds} = useContext(AuthContext)

    const music=()=>{
        return (<div className="curr_aff_main">
           {musicIds.map((id)=>{
               
            return(
                 <div className="y_div">
                 <LiteYouTubeEmbed width='100%' id={id} title='' />
                 </div>)
            }) }
        </div>);
    }

   return <div  >

              
{auth.currentUser!=null?music():<h1>Login To Use This Service</h1>}
            
    </div>;
}


export default Music;
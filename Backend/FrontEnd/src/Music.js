import React,{useEffect,useState} from 'react';
import axios from 'axios';
import YoutubeEmbedVideo from "youtube-embed-video";
import { auth } from './firebase';




const Music = () => {
    const [Ids, setIds] = useState([])

    useEffect(() => {
          if(auth.currentUser!=null){axios.get("/GetMusic").then(res=>{
             Ids.length=0
             setIds(res.data)
            // console.log(Ids)
          }).catch((err)=>{
              alert(err)
          })}
    })


    const music=()=>{
        return (<div className="curr_aff_main">
           {Ids.map((id)=>{
               
            return(
                 <div className="y_div">
                 <YoutubeEmbedVideo width='100%' videoId={id} suggestions={false} />
                 </div>)
            }) }
        </div>);
    }

   return <div  >

              
{auth.currentUser!=null?music():<h1>Login To Use This Service</h1>}
            
    </div>;
}


export default Music;
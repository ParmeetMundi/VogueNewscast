import React,{useEffect,useState} from 'react';
import axios from 'axios';
import YoutubeEmbedVideo from "youtube-embed-video";
import { getAuth } from '@firebase/auth';



const Games = () => {
    const [Ids, setIds] = useState([])
    const auth=getAuth()

    useEffect(() => {
         if(auth.currentUser!=null)  {
              axios.get("/GetGames").then(res=>{
            setIds(res.data)
            console.log(Ids)
          }).catch((err)=>{
              alert(err)
          })
        }
    }, [])


    const games=()=>{
        return (<div className="curr_aff_main">
           {Ids.map((id)=>{

             return(
                 <div className="y_div">
                 <YoutubeEmbedVideo width='100%' videoId={id} suggestions={false} />
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
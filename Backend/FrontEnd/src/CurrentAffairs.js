import React,{useEffect,useState} from 'react';
import './CurrentAffairs.css'
import { Tweet } from 'react-twitter-widgets';
import axios from 'axios';
import { auth } from './firebase';



const CurrentAffairs = () => {
    const [id, setid] = useState([])    

    useEffect(() => {
          if(auth.currentUser!=null){axios.get("/Tweets").then(res=>{
             setid(res.data)
          }).catch((err)=>{
              alert(err)
          })}
    }, [])


    const Tweets=()=>{
        return (<div className="curr_aff_main">
            {id.map((x)=>{
              return (<div className='indv_tweet'>               
              <Tweet tweetId={x}  />
              </div>)
            })}
        </div>);
    }

   return <div  >

              
    {auth.currentUser!=null?Tweets():<h1>Login To Use This Service</h1>}
            
    </div>;
}


export default CurrentAffairs;
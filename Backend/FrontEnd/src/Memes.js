import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { getAuth } from '@firebase/auth';



const Memes = () => {
    
    const [urls, seturls] = useState([])
    const auth=getAuth();
    useEffect(() => {
        if(auth.currentUser!=null) { axios.get("/GetGiphy").then(res=>{
             urls.length=0
             seturls(res.data)
          }).catch((err)=>{
              alert(err)
          })
        }
    }, [])


    const memes=()=>{
        return (<div className="curr_aff_main">
            {urls.map((x)=>{
              return (<div className='img_div'>               
              <img  src={x} />
              </div>)
            })}
        </div>);
    }

   return <div  >

              
{auth.currentUser!=null?memes():<h1>Login To Use This Service</h1>}
            
    </div>;
}


export default Memes;
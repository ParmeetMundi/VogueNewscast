import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import { getAuth } from '@firebase/auth';
import { AuthContext } from './CurrentAuth';



const Memes = () => {
    
    
    
    const auth=getAuth();
    const {urls} = useContext(AuthContext)

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
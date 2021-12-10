import axios from 'axios';
import React,{useEffect, useState} from 'react';
import GlassCardTwitter from './glasscard';
import GlassCardGiphy from './glasscardgiphy';
import GlassCardYoutube from './glasscardyoutube';

const Home = () => {
    const [tweets, settweets] = useState([])
    const [urls, seturls] = useState([])
    const [ids, setids] = useState([])
   
    useEffect(() => {
          axios.get("/").then(res=>{
             urls.length=0
             settweets(res.data[0])
             seturls(res.data[1])
             setids(res.data[2])
          }).catch((err)=>{
              alert(err)
          })
    }, [])

    return <div>
      <p>
      <GlassCardTwitter tweets={tweets}/>
      <GlassCardGiphy urls={urls}/>
      <GlassCardYoutube ids={ids}/>
      </p>
    </div>;
}


export default Home;
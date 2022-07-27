import React,{useEffect, useState,useContext} from 'react';
import { AuthContext } from './CurrentAuth';
import GlassCardTwitter from './glasscard';
import GlassCardGiphy from './glasscardgiphy';
import GlassCardYoutube from './glasscardyoutube';
import './Home.css'

const Home = () => {
    const {Hometweets,Homeurls,Homeids} = useContext(AuthContext)

    return <div className='Home'>
      <GlassCardTwitter tweets={Hometweets}/>
      <GlassCardGiphy urls={Homeurls}/>
      <GlassCardYoutube ids={Homeids}/>
    </div>;
}


export default Home;
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase.js'
import axios from 'axios'

export const AuthContext = createContext();


export const CurrentAuth = ({ children }) => {
    const url="http://localhost:8080"
    const [currentUser, setCurrentUser] = useState("null");
    const [urls, seturls] = useState([])
    const [musicIds, setmusicIds] = useState([])
    const [gamesIds, setgamesIds] = useState([])
    const [tweetIds, settweetIds] = useState([])
    const [Hometweets, setHometweets] = useState([])
    const [Homeurls, setHomeurls] = useState([])
    const [Homeids, setHomeids] = useState([])

   const call=()=>{
     
    axios.get(url+"/Home").then(res=>{
        urls.length=0
        setHometweets(res.data[0])
        setHomeurls(res.data[1])
        setHomeids(res.data[2])
     }).catch((err)=>{
         alert(err)
     })




    if(auth.currentUser!=null) { 
        axios.get(url+"/GetGiphy").then(res=>{
        urls.length=0
        seturls(res.data)

     }).catch((err)=>{
         alert(err)
     })

     
     axios.get(url+"/GetMusic").then(res=>{
        musicIds.length=0
        setmusicIds(res.data)
     }).catch((err)=>{
         alert(err)
     })

     axios.get(url+"/GetGames").then(res=>{
        setgamesIds(res.data)
      }).catch((err)=>{
          alert(err)
      })

      axios.get(url+"/Tweets").then(res=>{
        settweetIds(res.data)
      }).catch((err)=>{
         alert(err)
      })

    
    }



   }



    useEffect(() => {

        auth.onAuthStateChanged(setCurrentUser);
        call()

    }, [currentUser])
    






    return <AuthContext.Provider value={{ "currentUser": currentUser,"urls":urls,"musicIds":musicIds,"gamesIds":gamesIds,"tweetIds":tweetIds,
                                           "Hometweets":Hometweets,"Homeids":Homeids,"Homeurls":Homeurls}}>
        {children}
    </AuthContext.Provider>;
}


export default CurrentAuth;
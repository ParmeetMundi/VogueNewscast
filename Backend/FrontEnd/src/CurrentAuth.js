import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase.js'
import axios from 'axios'

export const AuthContext = createContext();


export const CurrentAuth = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState("null");
    const [urls, seturls] = useState([])
    const [musicIds, setmusicIds] = useState([])
    const [gamesIds, setgamesIds] = useState([])
    const [tweetIds, settweetIds] = useState([])
    const [Hometweets, setHometweets] = useState([])
    const [Homeurls, setHomeurls] = useState([])
    const [Homeids, setHomeids] = useState([])

   const call=()=>{
     
    axios.get("/Home").then(res=>{
        urls.length=0
        setHometweets(res.data[0])
        setHomeurls(res.data[1])
        setHomeids(res.data[2])
     }).catch((err)=>{
         alert(err)
     })




    if(auth.currentUser!=null) { 
        axios.get("/GetGiphy").then(res=>{
        urls.length=0
        seturls(res.data)

     }).catch((err)=>{
         alert(err)
     })

     
     axios.get("/GetMusic").then(res=>{
        musicIds.length=0
        setmusicIds(res.data)
     }).catch((err)=>{
         alert(err)
     })

     axios.get("/GetGames").then(res=>{
        setgamesIds(res.data)
      }).catch((err)=>{
          alert(err)
      })

      axios.get("/Tweets").then(res=>{
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
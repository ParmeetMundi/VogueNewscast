import Twit from 'twit'
import Trends from '../Trends.js'
import {tweets} from '../Trends.js'
import Tweet from '../Schemas/tweets.js'
import Giphy from './Giphy.js'

const Twitter = () => {

    const T = new Twit({
        consumer_key: process.env.consumer_key,
        consumer_secret: process.env.consumer_secret,
        access_token: process.env.access_token,
        access_token_secret: process.env.access_token_secret
    })
    
    getTrends(T)
    setInterval(()=>getTrends(T),1000*60*60) 
    setInterval(()=>getTweets(T),1000*60*60) 
   

}

const getTweets=(T)=>{
    try{

       tweets.length=0
       for(var i=0;i<5;i++){
        T.get('search/tweets',{q:Trends[i].name,result_type:'popular',count:'5'},
        async (err,data,res)=>{
            var tweetIds=[]
            const Twittertweets=data.statuses

             for(var j=0;j<Twittertweets.length;j++){
                 tweetIds.push(Twittertweets[j].id_str)
                 tweets.push(Twittertweets[j].id_str)
             }
           
           await  Tweet.updateOne({"hashtag":Trends[i].name},{ "hashtag":Trends[i].name,
            "ids":tweetIds},{upsert:true})
            
           // tweets.push({"hashtag":Trends[i].name,"ids":tweetIds})
           console.log(tweetIds)

        })

       }
       
    }catch(err){
        console.log(err)
    }
}

const getTrends = (T) => {
    try {
        
        var tweets = []
        T.get('trends/place', { id: '23424848' }, (err, data, res) => {
            Trends.length=0
            const tweets = data[0].trends

            for(var i=0;i<tweets.length;i++){
                Trends.push(tweets[i])
            }
           // Giphy()
            getTweets(T)
           
        })

    } catch (err) {
        console.log(err)
    }

}


export default Twitter;
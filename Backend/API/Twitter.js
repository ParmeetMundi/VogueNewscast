import Twit from 'twit'
import Trends from '../Trends.js'
import Tweet from '../Schemas/tweets.js'

const Twitter = () => {

    const T = new Twit({
        consumer_key: "xb9C6jH0JQzc4PhWYo7JCsVub",
        consumer_secret: "HExBWpRPZLe2cgg1m55YjMZgKbUw6uRA5ahqjn8D2kYFsOlR8h",
        access_token: "1430817484832075776-o44hhP5hxJuhipAH33mCctiGhcGl0P",
        access_token_secret: "6zYqwxLXAxWRyJBHu2b0BFYeePcFqkePO81j9LPfis6bT"
    })
    
    getTrends(T)
    setInterval(()=>getTrends(T),1000*60*60) 
    setInterval(()=>getTweets(T),1000*60*60) 
   

}

const getTweets=(T)=>{
    try{

       for(var i=0;i<Trends.length;i++){
        T.get('search/tweets',{q:Trends[i].name,result_type:'popular',count:'5'},
        async (err,data,res)=>{
            var tweetIds=[]
            const tweets=data.statuses

             for(var j=0;j<tweets.length;j++){
                 tweetIds.push(tweets[j].id_str)
             }
           
           await  Tweet.updateOne({"hashtag":Trends[i].name},{ "hashtag":Trends[i].name,
            "ids":tweetIds},{upsert:true})
            

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

            const tweets = data[0].trends

            // const tweets=rawTweets.map(x => {if(franc(x.name)==='eng') return x})
            
            for(var i=0;i<tweets.length;i++){
                Trends.push(tweets[i])
            }
            getTweets(T)
           
        })

    } catch (err) {
        console.log(err)
    }

}


export default Twitter;
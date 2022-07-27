import React, { useState, useContext } from 'react';
import './CurrentAffairs.css'
import { Tweet } from 'react-twitter-widgets';
import { auth } from './firebase';
import { AuthContext } from './CurrentAuth';



const CurrentAffairs = () => {

    const { tweetIds } = useContext(AuthContext)
    const [spinner, setspinner] = useState(false)

    const Tweets = () => {

        return (<div className="curr_aff_main">
            {tweetIds.map((x) => {
                return (<div className='indv_tweet'>
                    <Tweet className="tweet" tweetId={x} />
                </div>)
            })}
        </div>);
    }

    return <div  >

        {auth.currentUser != null ?
            Tweets()
            :
            <h1>Login To Use This Service</h1>}

    </div>;
}


export default CurrentAffairs;
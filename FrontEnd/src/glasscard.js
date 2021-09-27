import React,{useEffect} from 'react';
import profile from './images/back.jpg';
import styled from 'styled-components';
import axios from 'axios'
import { useSpring, animated, config } from 'react-spring';
import { Timeline, Tweet } from 'react-twitter-widgets';
import './glasscard.css'

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
margin: 2em;
`;

/*const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
`;
<StyledImg src={profile} />
FOR IMAGE */

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCardTwitter = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    var tweets=[{ids:["1442186834918793225" , "1442186834918793225"]}]
    
    
    useEffect(() => {
          
         axios.get('http://localhost:8080/Tweets').then((res)=>{
              tweets=res.data
         })

    }, [])
    
    const Tweets=()=>{
        return (
        <div className="rahul">
               {tweets.map((x)=>{
               return (
                    x.ids.map((id)=>{return(<Tweet tweetId={id} />) }) 
                  )
               }) }
        </div>)
    }
    
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            
            <StyledH3 >
                
                {Tweets()}
                
                {/* <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'TwitterDev'
                    }}
                    options={{
                        height: '400'
                    }} /> */}
            </StyledH3>
            {/* <StyledH3>Tweet<br/> Likes and Retweets </StyledH3> */}
        </Container>
    );
}


export default GlassCardTwitter;
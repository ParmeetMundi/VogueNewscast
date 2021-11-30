import React from 'react';
import profile from './images/back.jpg';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Timeline, Tweet } from 'react-twitter-widgets';
import YoutubeEmbedVideo from "youtube-embed-video";

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

const vedios=['QHdkC6Kn0Io','9LVTHBfKSVQ','gCvr6uzmM0o','URdMEEgstHA','hcXz24-pXYY','vhMnpNFMDAk','5vcdMXJQebk','zxwCCcgoUoQ','Y4VnT6Q1oss',
'ecjvUhfSFiY']

const YoutubeVedios=()=>{
    return (
    <div className="rahul">
           {vedios.map((id)=>{
             
            return(<YoutubeEmbedVideo width='100%' videoId={id} suggestions={false} />)
           
           }) }
    </div>)
}

const GlassCardYoutube = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            
            <StyledH1>
            {YoutubeVedios()}
            </StyledH1>
           
        </Container>
    );
}

export default GlassCardYoutube;
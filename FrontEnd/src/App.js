import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import logo from './logo.svg';
import './App.css';
import background from './images/background2.jpg';
import GlassCardTwitter from './glasscard';
import GlassCardGiphy from './glasscardgiphy';
import GlassCardYoutube from './glasscardyoutube';

function App() {
  return (
    <div className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      
      <Navbar />

      <p>
      <GlassCardTwitter />
      <li></li>
      <li></li>
      <GlassCardGiphy /> </p>
      <li></li>
      <li></li>
      <p>
      <GlassCardYoutube />
      <li></li>
      {/* <li></li>
      <GlassCardTwitter /> </p>
      <li></li>
      <li></li>
      <p>
      <GlassCardGiphy /> 
      <li></li>
      <li></li>
      <GlassCardYoutube />
      </p> */}
      
    </div>
  );
}

export default App;

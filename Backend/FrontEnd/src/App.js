import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import logo from './logo.svg';
import './App.css';
import background from './images/background2.jpg';
import CurrentAffairs from './CurrentAffairs';
import Memes from './Memes';
import Music from './Music';
import Games from './Games';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import CurrentAuth from './CurrentAuth';

function App() {
  return (
   <CurrentAuth>
    <BrowserRouter>
    <div className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        overflow:'hidden',
        overflowY:'scroll'
      }}
    >
     <Navbar />
      <Routes>
      
     
      <Route exact path='/' element={<Home/>}/>
      

      <Route exact path='/currentAffairs' element={ <CurrentAffairs/>}/>
      <Route exact path='/Memes' element={ <Memes/>}/>
      <Route exact path='/Music' element={ <Music/>}/>
      <Route exact path='/Games' element={ <Games/>}/>
      <Route exact path='/Signup' element={ <SignUp/>}/>
      <Route exact path='/Login' element={ <Login/>}/>
       
        </Routes>
     
    </div>
    </BrowserRouter>
    </CurrentAuth>
  );
}

export default App;

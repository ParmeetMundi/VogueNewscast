import React, { Component ,useState,useContext} from 'react';
import { MenuItems } from "./MenuItems"
import {Button} from "../Button"
import './Navbar.css'
import { Link ,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../CurrentAuth';
import { auth } from '../../firebase';


const  Navbar=()=>{
    const [state, setState] = useState({ clicked: false}) 

   const handleClick = () => {
        setState({ clicked: !this.state.clicked })
    }
    
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut();
        navigate('/')
    
      }

    
        return(
            <nav className="NavbarItems">
                <Link to='/' className="Nav_main_link">
                <h1 className="navbar-logo">Vogue Newscast 
                {/* <i className="fab fa-react"></i> */}
                </h1>
                </Link>
                <div className="menu-icon"  onClick={handleClick}>
                    <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                { currentUser === null ?<div className="sign"><Link to='/Login' className="Nav_main_link">
                <Button >Log In</Button>
                </Link>
                <li className="bullet"></li>
                <Link to='/Signup' className="Nav_main_link">
                <Button>Sign Up</Button>
                </Link>
                </div>:
                <Button onClick={signOut}>Sign Out</Button>
                }
                
                <li className="bullet"></li>
            </nav>
        )
    
}

export default Navbar
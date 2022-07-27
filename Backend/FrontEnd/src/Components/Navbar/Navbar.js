import React, { Component, useState, useContext } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../CurrentAuth';
import { auth } from '../../firebase';
import { NavLink } from "react-router-dom";


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut();
        navigate('/')

    }

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>

                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                       Vogue Newscast
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (

                                <li className="nav-item" key={index}>
                                    <NavLink
                                        to={item.url}
                                        className="nav-links"
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}

                        {currentUser === null ?
                            <li>
                                <div className="sign">
                                    <Link to='/Login' className="Nav_main_link">
                                        <Button >Log In</Button>
                                    </Link>
                                    <Link to='/Signup' className="Nav_main_link">
                                        <Button>Sign Up</Button>
                                    </Link>
                                </div>
                            </li> :
                            <li>
                                <Button onClick={signOut}>Sign Out</Button>
                            </li>
                        }

                    </ul>




                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;
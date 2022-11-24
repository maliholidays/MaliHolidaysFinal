import React from 'react'
import logo from './Logo.png'
import './Header.style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
        <div className="HeaderLeftSide">
            <div className="HeaderLogo">
                <a href="/"><img src={logo} alt="logo" /></a>
                
            </div>
            <div className="HeaderMenu">
                <ul>
                <Link to="/Discover">Discover</Link>
                <Link to="/About">About</Link>
                <Link to="/Packages">Packages</Link>
                <Link to="/Vehicles">Vehicles</Link>
                </ul>
            </div>
        </div>
        <div className="HeaderRightSide">
            {/* <div className="HeaderIcons">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
            </div> */}
            <div className="FooterLogo">
          <h1>Mali<span>Holidays</span></h1>
        </div>
        </div>
        
        
    </div>
  )
}

export default Header
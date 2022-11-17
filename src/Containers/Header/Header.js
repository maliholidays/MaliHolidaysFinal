import React from 'react'
import logo from './Logo.png'
import './Header.style.css'

function Header() {
  return (
    <div className="Header">
        <div className="HeaderLeftSide">
            <div className="HeaderLogo">
                <a href="#"><img src={logo} alt="logo" /></a>
                
            </div>
            <div className="HeaderMenu">
                <ul>
                    <a href=""><li>Explore</li></a>
                    <a href=""><li>Discover</li></a>
                    <a href=""><li>Tour Package</li></a>
                </ul>
            </div>
        </div>
        <div className="HeaderRightSide">
            <div className="HeaderIcons">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
        
        
    </div>
  )
}

export default Header
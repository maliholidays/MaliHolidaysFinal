import React from 'react'
import './Footer.styled.css'

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContents">
        <div className="FooterLogo">
          <h1>Mali<span>Holidays</span></h1>
        </div>
        <div className="FooterMenu">
          <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>Explore</li></a>
            <a href=""><li>Packages</li></a>
            <a href=""><li>Discover</li></a>
          </ul>
        </div>
      </div>
      <div className="FooterCopyright">
        <p>&copy; 2022 Mali Holidays LLC All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
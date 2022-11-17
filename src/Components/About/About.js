import React from 'react'
import './About.Styled.css'
import Dam from './ajin-k-s-TzjScBnouGQ-unsplash.jpg'
import Road from './aslam-mac-QpmbWy5bwe4-unsplash.jpg'

function About() {
  return (
    <div className="About">
        <h1 className="AboutTitle">SPECIAL FEATURES</h1>
        <p className="AboutPara">See some benefit of joining us</p>
        <div className="AboutContents">
            <div className="AboutLeftSide">
                <div className="AboutSection">
                    <p className="AboutSectionNumber">01</p>
                    <h1 className="AboutSectionTitle">Get best deals</h1>
                    <p className="AboutSectionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus earum nihil itaque</p>
                </div>
                <div className="AboutSection">
                    <p className="AboutSectionNumber">02</p>
                    <h1 className="AboutSectionTitle">100% price transparency</h1>
                    <p className="AboutSectionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus earum nihil itaque</p>
                </div>
                <div className="AboutSection">
                    <p className="AboutSectionNumber">03</p>
                    <h1 className="AboutSectionTitle">Travel with more confidence</h1>
                    <p className="AboutSectionParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus earum nihil itaque</p>
                </div>
            </div>
            <div className="AboutRightSide">
                <img src={Dam} alt="" className="AboutRightSideImageTop" />
                <img src={Road} alt="" className="AboutRightSideImageBottom" />
            </div>
        </div>
        
    </div>
  )
}

export default About
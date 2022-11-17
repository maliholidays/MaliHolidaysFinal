import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Subscription from '../../Components/Subscription/Subscription'
import About from '../../Components/About/About'
import Search from '../../Components/Search/Search'
import Explore from '../../Components/Explore/Explore'
import Testimonials from '../../Components/Testimonials/Testimonials'
import './Home.styled.css'

function Home() {
  return (
    <>
        <Header/>
        <About/>
        <Search/>
        <Explore/>
        <Testimonials/>
        <Subscription/>
        <Footer/>
        
         {/* <div className="box">
          <div className="BoxContent">
            <img src="https://m.media-amazon.com/images/I/51ZL-NBk7hL._AC_SY135_.jpg" alt="" className="ImageBox" />
            <p className="BoxTitle">Hawk Proaudio SXFG01</p>
          </div>
          <div className="BoxContent">
            <img src="https://m.media-amazon.com/images/I/71zL4nwX9YL._AC_SY135_.jpg" alt="" className="ImageBox" />
            <p className="BoxTitle">Rode PodMic Dynamic…</p>
          </div>
          <div className="BoxContent">
            <img src="https://m.media-amazon.com/images/I/71MmQ1fepIL._AC_SY135_.jpg" alt="" className="ImageBox" />
            <p className="BoxTitle">Maono AU-A04 Conden…</p>
          </div>
          <div className="BoxContent">
            <img src="https://m.media-amazon.com/images/I/51K7wenaznL._AC_SY135_.jpg" alt="" className="ImageBox" />
            <p className="BoxTitle">Maono AU-A03 Conden…</p>
          </div>
         </div> */}
    </>
  )
}

export default Home
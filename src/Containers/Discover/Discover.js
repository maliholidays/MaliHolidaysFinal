import React from 'react'
import Explore from '../../Components/Explore/Explore'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Places from '../../APIs/Places'
import './Discover.Styled.css'
import Ooty from '../../Images/Places/Ooty.jpg'

function Discover() {
  return (
    <div className="Discover">
        <Header/>
        <div className="PackageDescriptionBanner">
            <img className="PackageDescriptionBannerImage" src={Ooty}/>
            <h1 className="PackageDescriptionBannerTitle">Discover Places</h1>
        </div>
        <div className="PackageDescriptionContent">

        </div>
        <div className="filters">
            <div className="leftFilters">
                <div className="FilterTab">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="FilterTabTitle">Featured</p>
                </div>
                <div className="FilterTab">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="FilterTabTitle">Family-Friendly</p>
                </div>
                <div className="FilterTab">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="FilterTabTitle">On sale</p>
                </div>
                <div className="FilterTab">
                <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="FilterTabTitle">Sub Now</p>
                </div>
            </div>
            <div className="RightFilters">
                <div className="FilterTab">
                    <p className="FilterTabTitle">Recently Added</p>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <div className="Places">
            {Places.map((place,index)=>{
                    return(  
                    <div className="PlaceTab">
                        {/* <div className="PlaceTaboverlay">
                            <a href="/discover"></a>
                        </div> */}
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                {/* <h1 className="PlaceTabTitle">{place.Name}</h1> */}
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                           
                        </div> <h1 className="PlaceTabPriceasas">{place.State}</h1>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Category}</p>
                            {/* <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p> */}
                        </div>
                    </div>
                )

            })} 
        </div>
        <Footer/>
    </div>
  )
}

export default Discover
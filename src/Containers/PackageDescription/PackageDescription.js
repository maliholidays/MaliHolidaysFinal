import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Places from '../../APIs/Places'
import Areas from '../../APIs/States'
import { Link } from 'react-router-dom'
import Munnar from '../../Images/Places/Ooty.jpg'
import './PackageDescritpion.Styled.css'
import Select from 'react-select'
import traveller from '../../Images/Places/DSC_0908.JPG'
import { useLocation,useParams } from "react-router-dom";
function PackageDescription({placeDesc,setPlaceDesc}) {
    console.log(placeDesc);
    
    // const [placeState,setplaceState]= useState("");
    // const [placeArea,setPlaceArea] = useState("");
    // const[count,setCount]= useState(0);
    // const[placeDesc,setPlaceDesc]= useState([]);
    // console.log(Places);
    // const location = useLocation();
    // const datas = location.data;
    // console.log("place is", props.location.state);
    // const {type} = useParams();
    // const {datas} = useLocation().state.Data;
    // console.log("datas"+datas);
    // console.log("places from home though search"+placeDesc);
    
    
    
    const items = [
        { value: '7', label: '(1-7) 7 Seat Car' },
        { value: '12', label: '(7-12) 12 Seat Traveller' },
        { value: '17', label: '(12-17) 17 Seat Traveller' },
        { value: '17', label: '(17-20) 20 Seat Traveller' },
        { value: '26', label: '(20-26) 26 Seat Traveller' },
        { value: '35', label: '(26-35) 35 Seat Traveller' },
        { value: '49', label: '(35-49) 49 Seat Traveller' },
      ]
    // const optionStyles={
    //     width: '45%',
    //     height: '40px',
    //     fontSize: '18px',
    //     color: 'rgb(46, 46, 46)',
    //     padding: '5px 15px',
    //     border:'none',
    //     borderBottom:'1px solid rgb(179, 179, 179)',
    //     /* border-radius: 5px; */
    //     outline: 'none',
    // }
    // const customStyles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       width: '100%',
    //       height: '40px',
    //       borderBottom: '2px dotted green',
    //       color:'rgb(46, 46, 46)',
    //       backgroundColor:'white',
    //       fontSize: '18px',
    //       padding: '5px 15px',
    //       border:'none',
    //       outline: 'none'
    //     }),
    //     control: (provided) => ({
    //       ...provided,
    //       marginTop: "5%",
    //     })
    //   }
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
  return (
    <div className="PackageDescription" >
        <Header/>
        <div className="PackageDescriptionBanner" id="Banner">
            <div className="PackageDescriptionBannerImage">
                <img src={placeDesc.image} alt="" />
                <h1 className="PackageDescriptionBannerTitle">{placeDesc.Area}</h1>
            </div>
        </div>
        <div className="PackageDescriptionContent">
            <h2 className='PackageDescriptionContentBooking'>For Price and Customizing your trip, Please Contact Below</h2>
            <h1 className='PackageDescriptionAboutTitle'>About {placeDesc.Area}</h1>
            <div className="PackageDescriptionAbout">
                {placeDesc.descriptions.map((Description)=>{
                    return(
                        <p>{Description.description}</p>
                    )
                })}
    
            </div>
            <div className="PackageDescriptionWeather">
                <h1>Best Time To Visit</h1>
                {/* <p>Summer (March - May)<br/> Winter (December - February)<br/> Monsoon (June - September)</p> */}
                {placeDesc.time.map((Month)=>{
                    return(
                        <p>{Month.Season} &#40;{Month.StartMonth} - {Month.EndMonth}&#41;</p>
                    )
                    
                })}
            </div>
            
        </div>
        <h1 className='PlaceToVisit'>Best Packages For {placeDesc.Area}</h1>
        <div className="PlacesTovisitIn">
        
            {placeDesc.packages.map((place,index)=>{
                return(
                    <div className="placeToVisit">
                        <img src={place.Image} alt="" className="placeToVisitImage" />
                        <div className="placeToVisitContents">
                            <h1 className="placeToVisitContentsTitle">{place.Title}</h1>
                            <p className="placeToVisitContentsLocation">{place.Area}</p>
                            <p className="placeToVisitContentsDescription">{truncate(place.Description, 175)}</p>
                            <p className="placeToVisitContentsTimings"><span>Place will Cover:</span> &nbsp;{place.placesWillVisit.map((placeWillVisit)=>{
                                return(
                                    <>{placeWillVisit.Place}, </>
                                )
                            })}</p>
                            <p className="placeToVisitContentsPrice"><span>Duration: </span> {place.Days.day} Days and {place.Days.night} nights</p>
                            {/* <p className="placeToVisitContentsContactNumber"><span>Contact Number:</span> {place.ContactNumber}</p> */}
                            <button className="placeToVisitContentsBtn">View Details</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <h1 className='PlaceToVisit'>Places to Visit in {placeDesc.Area}</h1>
        {/* <div className="Places">
            

            
            {placeDesc.placesTovisit.map((place,index)=>{
                if(index<8){
                    return( 
                        <React.Fragment key={index}>
                    <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Place}</h1>
                                <p className="PlaceTabDescription">{place.Place}</p>
                            </div>
                            <h1 className="PlaceTabPrice"> {place.price}</h1>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                        </div>
                    </div></React.Fragment> 
                )}

            })} 
        </div> */}
        <div className="PlacesTovisitIn">
            {placeDesc.placesTovisit.map((place,index)=>{
                return(
                    <div className="placeToVisit">
                        <img src={place.Image} alt="" className="placeToVisitImage" />
                        <div className="placeToVisitContents">
                            <h1 className="placeToVisitContentsTitle">{place.Place}</h1>
                            <p className="placeToVisitContentsLocation">{place.Area}</p>
                            <p className="placeToVisitContentsDescription">{truncate(place.description, 175)}</p>
                            <p className="placeToVisitContentsTimings"><span>Timings:</span> {place.Timings.from}-{place.Timings.to}</p>
                            <p className="placeToVisitContentsPrice"><span>Fare:</span> {place.Price.from} to {place.Price.to}</p>
                            <p className="placeToVisitContentsContactNumber"><span>Contact Number:</span> {place.ContactNumber}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <h1 className="ProjectDescriptionExploretitle">Explore More Places</h1>
        <div className="Places">
            

            
            {Places.map((place,index)=>{
                if(index>8&&index<13){
                    return(  
                        <React.Fragment key={index}>
                    <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Name}</h1>
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                            <h1 className="PlaceTabPrice"> {place.price}</h1>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                        </div>
                    </div></React.Fragment>
                )}

            })} 
        </div>
        <h1 className="ProjectDescriptionExploretitle">See Our Vehicles</h1>
        <div className="Places">
            

            
            {Places.map((place,index)=>{
                if(index>8&&index<13){
                    return(  
                        <React.Fragment key={index}>
                    <div className="PlaceTab">
                        <img src={traveller} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">26 Seat</h1>
                                <p className="PlaceTabDescription">Traveller</p>
                            </div>
                            <h1 className="PlaceTabPrice"> A/C</h1>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">Pushback Seats</p>
                            {/* <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p> */}
                        </div>
                    </div></React.Fragment>
                )}

            })} 
        </div>
        
        <div className="ContactSection">
        <h1 className="contactSectionTitle">Contact us For More Information on Packages</h1>
            <form action="">
                <div className="NameEmail">
                    <input type="text" className="name" placeholder='Enter Your Name'/>
                    <input type="number" className="number" placeholder='Enter Your Number'/>
                </div>
                <div className="NumberPlace">
                    <input type="email" className="email"placeholder='Enter Your Email' />
                    {/* <input type="number" className="number" placeholder='Select Your Vehicle Capacity'/> */}
                    <Select
                        defaultValue={items[0]}
                        label="Single select"
                        options={items}
                        className="select"
                    />
                    <input type="hidden" className="Place" value={placeDesc.area}/>
                </div>
                <textarea name="" id="" cols="30" rows="10" className="message"placeholder='Enter Your Message'></textarea>
                <button type="submit" className="buttonSubmit">Send</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default PackageDescription
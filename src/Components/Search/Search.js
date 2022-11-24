import React from 'react'
// import BackWater from './backwater.jpg'
import './Search.Styled.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Places from '../../APIs/Places'
import Areas from '../../APIs/States'
import { useState } from 'react'
import PackageDescription from '../../Containers/PackageDescription/PackageDescription'
function Search({placeDesc,setPlaceDesc}) {
    // const searchedPlaces = ()=>{
        
    // }
    console.log("placeDesc from home "+placeDesc);
    const[Search,setSearch] = useState("");
    const PlacetoVisit = [
        {
            Area:"Managlore",
            image:"https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a29jaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            Name:"Kochi Walk way",
            State:"Andhra Pradesh",
            price:"1245",
            Days:"2",
            rating:"4.3",
        }
    ]
    const [placeState,setplaceState]= useState("");
    const [placeArea,setPlaceArea] = useState("");
    const[count,setCount]= useState(0);
    const[trues,setTrues] = useState("false")
    
    console.log(placeDesc);
  return (
    <div className="SearchExplore">
         <div className="Search">
        <div className="SearchContent">
            <p className="SearchContenttitle">All you need is Tourink</p>
            <h1 className="SearchContentDescription">Explore Beautiful Places</h1>
            <button className='SearchContentButton'><i className="fa-solid fa-chevron-left"></i>Lotus Temple
                <i className="fa-solid fa-chevron-right"></i></button>
            <div className="SearchBar">
                <div className="SearchBarSection locationSearchBar">
                    <div className="SearchBarIcon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="SearchBarInput">
                        <label htmlFor="">Location</label>
                        <input type="text" placeholder="Where do you want to go?" onChange={(e)=>{
                            setSearch(e.target.value);
                            
                        }}/>
                    </div>
                </div>
                {/* <div className="SearchBarSection">
                    <div className="SearchBarIcon">
                        <i className="fa-regular fa-calendar"></i>
                        </div>
                        <div className="SearchBarInput">
                            <label htmlFor="">Date</label>
                            <input type="date" placeholder="Choose date"/>
                        </div>
                    </div> */}
                <div className="SearchBarSection GuestSearchBar">
                    <div className="SearchBarIcon">
                    <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="SearchBarInput">
                        <label htmlFor="">Guests</label>
                        <input type="number" placeholder="Add guest"/>
                    </div>
                </div>
                <div className="SearchBarSectionIcon">
                <i className="fa-solid fa-magnifying-glass" onClick={()=>{
                    
                    setTrues("true")
                }}></i>
                </div>
            </div>
        </div>
        <div className={`searchedDiv ${trues}`}>
            {Places.map((place,index)=>{
            if(place.Area===Search){
                return(
                    <React.Fragment key={index}>
                            
                    <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                        <Link to={`/Package/${place.Area}`} onClick={(e)=>{
                                // e.preventDefault();
                                setPlaceDesc({
                                    name:place.Name,
                                    area:place.Area,
                                    image:place.image
                                })
                            }}>
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Name}</h1>
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                            <h1 className="PlaceTabPrice">$ {place.price}</h1>
                        </Link>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                            
                        </div>
                    </div>
                    </React.Fragment>
                )
            }
        })}
        </div>
        <h1 className='SearchTabsTitle'>Popular Search</h1>
        <div className="SearchTabs">
            {Areas.map((Area,index)=>{
                
                return(
                    <React.Fragment key={index}>
                    <button className="SearchTabButton" value={Area.name} onClick={(e)=>{
                        setplaceState(e.target.value)
                    }}>{Area.name}</button></React.Fragment>
                )
            })}
            {/* <br/>
            {Places.map((Area)=>{
                if(placeState==Area.State){
                
                return(
                    <button className="SearchTabButton" value={Area.Area} onClick={(e)=>{
                        setPlaceArea(e.target.value);
                    }}>{Area.Area}</button>
                )}
            })} */}
            
        </div>
    </div>
    <div className="Explore">
        {/* <div className="filters">
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
        </div> */}
        <div className="Places">
            {Places.map((place,index)=>{
                {/* console.log("Place-Image is ",place.image); */}
                if(count<8){
                
                if(place.State==trues){
                    return(  
                        <React.Fragment key={index}>
                            
                    <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                        <Link to={`/Package/${place.Area}`} onClick={(e)=>{
                                // e.preventDefault();
                                setPlaceDesc({
                                    name:place.Name,
                                    area:place.Area,
                                    image:place.image
                                })
                            }}>
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Name}</h1>
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                            <h1 className="PlaceTabPrice">$ {place.price}</h1>
                        </Link>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                            
                        </div>
                    </div>
                    </React.Fragment>
                )
            }
                else if(placeState==""||placeState=="All" && trues==""){
                    return(
                        <React.Fragment key={index}>
                           
                        <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails"> 
                        <Link to={`/Package/${place.Area}`} onClick={(e)=>{
                                // e.preventDefault();
                                setPlaceDesc(place)
                            }}>
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Area}</h1>
                                <p className="PlaceTabDescription">{place.State}</p>
                            </div>
                            <h1 className="PlaceTabPrice">$ {place.price}</h1>
                        </Link></div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                            {/* <Link to={{
                                path:"/PackageDescription/",
                                state:{data:placeDesc}
                            }} >Read More</Link> */}
                            
                            {/* <button onClick={(e)=>{
                                // e.preventDefault();
                                
                                
                                setPlaceDesc([...placeDesc,{
                                    name:place.Name,
                                    area:place.Area,
                                }])
                                console.log(placeDesc);
                                }}>Click me</button> */}
                            {/* <Link to={`/Discover/${place.Area}`}>Read More</Link> */}
                        </div>
                    </div></React.Fragment>
                    )
                }
                
            }   
            })}
            
           
            
        </div>
            <Link to="/Discover" className="ViewMore">View More Places</Link>
    </div>
    </div>
   
  )
}

export default Search
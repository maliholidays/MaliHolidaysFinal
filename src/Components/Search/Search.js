import React from 'react'
// import BackWater from './backwater.jpg'
import './Search.Styled.css'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import { useState } from 'react'
function Search() {
    const Areas = [
        {
            name:"All"
        },
        {
            name:"Munnar",
        },
        {
            name:"Wayanad",
        },
        {
            name:"Alapuzha",
        },
        {
            name:"Ernakulam",
        },
    ]
    const Places=[
        {
            Area:"Munnar",
            image:"https://images.unsplash.com/photo-1635756227689-01eda5140530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG11bm5hcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            Name:"Top Station",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Munnar",
            image:"https://images.unsplash.com/photo-1580818135730-ebd11086660b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVubmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            Name:"Tea Plantation",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Wayanad",
            image:"https://images.unsplash.com/photo-1547009917-87cfb648b536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdheWFuYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            Name:"Churam",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Wayanad",
            image:"https://images.unsplash.com/photo-1623302485960-d61687113a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F5YW5hZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            Name:"Lakkidi",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Alapuzha",
            image:"https://images.unsplash.com/photo-1610342160649-0570571a6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFjayUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            Name:"Backwater",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Alapuzha",
            image:"https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGtlcmFsYSUyMGJhY2slMjB3YXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            Name:"Boating",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Alapuzha",
            image:"https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGtlcmFsYSUyMGJhY2slMjB3YXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            Name:"Nature",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Ernakulam",
            image:"https://images.unsplash.com/photo-1590123732197-e7079d2ceb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29jaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            Name:"Kochi Kayal",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
        {
            Area:"Ernakulam",
            image:"https://images.unsplash.com/photo-1625721838087-c46e51c89558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a29jaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            Name:"Kochi Walk way",
            price:"1245",
            Days:"2",
            rating:"4.3",
        },
    ]
    const [placeArea,setPlaceArea]= useState("");
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
                        <input type="text" placeholder="Where do you want to go?"/>
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
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <h1 className='SearchTabsTitle'>Popular Search</h1>
        <div className="SearchTabs">
            {Areas.map((Area)=>{
                return(
                    <button className="SearchTabButton" value={Area.name} onClick={(e)=>{
                        setPlaceArea(e.target.value)
                    }}>{Area.name}</button>
                )
            })}
            
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
                console.log(place.image);
                while(index<8){
                if(place.Area==placeArea){
                    return(  
                    <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Name}</h1>
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                            <h1 className="PlaceTabPrice">$ {place.price}</h1>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                        </div>
                    </div>
                )
            }
                else if(placeArea==""||placeArea=="All"){
                    return(
                        <div className="PlaceTab">
                        <img src={place.image} alt="" className="PlaceTabImage" />
                        <div className="PlaceTabDetails">
                            <div className="PlaceTabName">
                                <h1 className="PlaceTabTitle">{place.Name}</h1>
                                <p className="PlaceTabDescription">{place.Area}</p>
                            </div>
                            <h1 className="PlaceTabPrice">$ {place.price}</h1>
                        </div>
                        <div className="PlaceTabPlaceRating">
                            <p className="PlaceTabPlace">{place.Days}</p>
                            <p className="PlaceTabRating"><i className="fa-solid fa-star"></i>{place.rating}</p>
                        </div>
                    </div>
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
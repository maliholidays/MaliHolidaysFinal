import React from 'react'
import BackWater from './backwater.jpg'
import './Search.Styled.css'
function Search() {
  return (
    <div className="Search">
        <div className="SearchContent">
            <p className="SearchContenttitle">All you need is Tourink</p>
            <h1 className="SearchContentDescription">Explore Beautiful Places</h1>
            <button className='SearchContentButton'><i class="fa-solid fa-chevron-left"></i>Lotus Temple
                <i class="fa-solid fa-chevron-right"></i></button>
            <div className="SearchBar">
                <div className="SearchBarSection">
                    <div className="SearchBarIcon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="SearchBarInput">
                        <label htmlFor="">Location</label>
                        <input type="text" placeholder="Where do you want to go?"/>
                    </div>
                </div>
                <div className="SearchBarSection">
                    <div className="SearchBarIcon">
                        <i class="fa-regular fa-calendar"></i>
                        </div>
                        <div className="SearchBarInput">
                            <label htmlFor="">Date</label>
                            <input type="date" placeholder="Choose date"/>
                        </div>
                    </div>
                <div className="SearchBarSection">
                    <div className="SearchBarIcon">
                    <i class="fa-solid fa-user"></i>
                    </div>
                    <div className="SearchBarInput">
                        <label htmlFor="">Guests</label>
                        <input type="number" placeholder="Add guest"/>
                    </div>
                </div>
                <div className="SearchBarSectionIcon">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <h1 className='SearchTabsTitle'>Popular Search</h1>
        <div className="SearchTabs">
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
            <button className="SearchTabButton">Lotus Temple</button>
        </div>
    </div>
  )
}

export default Search
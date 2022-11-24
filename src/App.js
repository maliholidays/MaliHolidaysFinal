
import './App.css';
import Home from './Containers/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TourPackage from './Containers/TourPackage/TourPackage';
import Discover from './Containers/Discover/Discover';
import Gallery from './Containers/Gallery/Gallery';
import PackageDescription from './Containers/PackageDescription/PackageDescription';
import { useState } from 'react'
import Vehicles from './Containers/Vehicles/Vehicles';
import VehicleDescription from './Containers/VehicleDescription/VehicleDescription';
import About from './Containers/About/About';
function App() {
  const[placeDesc,setPlaceDesc]= useState({});
  return (
    <div className="App">

    
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path='/' element={<Home placeDesc={placeDesc} setPlaceDesc={setPlaceDesc}/>}/>
        <Route path='/Packages' element={<TourPackage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Discover' element={<Discover/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Package/:id' element={<PackageDescription placeDesc={placeDesc} setPlaceDesc={setPlaceDesc}/>}   />
        <Route path='/Vehicles' element={<Vehicles/>}/>
        <Route path='/Vehicles/:id' element={<VehicleDescription/>}/>

        {/* <Route path='/Explore' element={<Explore/>} /> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      {/* </div> */}
    </Router>
    </div>
  );
}

export default App;

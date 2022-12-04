
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
        <h1>We&rsquo;ll be back soon!</h1>
        <div>
            <p>
            Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment.We&rsquo;ll be back online
            shortly!
            </p>
            <p>&mdash; The XX Team</p>
        </div>
    </div>
  );
}

export default App;

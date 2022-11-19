
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

function App() {
  return (
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
        <Route path='/' element={<Home/>} />
        <Route path='/Packages' element={<TourPackage/>} />
        <Route path='/Discover' element={<Discover/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        {/* <Route path='/Explore' element={<Explore/>} /> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;


import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import ads2 from './assets/img/ads2.png';
import Footer from './components/Footer/footer';


// import Header from './components/header/header';
import ArticleDetail from './pages/Articledetail/articledetail';
import CategoryListing from './pages/categorylisting/categorylisting';

import Home from './pages/Home/home';
import PhotoDetail from './pages/Photodetail/photodetail';
import PhotoGallery from './pages/Photogallery/photogallery';
import Header from './components/header/header';
import './assets/scss/responsive.scss';
import Astrology from './pages/Astrology/Astrology';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Header2/> */}
      <Router >
        <ul className="nav_fix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articledetail">Article Detail</Link>
          </li>
          <li>
            <Link to="/category">Category Listing</Link>
          </li>
          <li>
            <Link to="/photogallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/photodetail">Photo Detail</Link>
          </li>
          <li>
            <Link to="/astrology">Astrology</Link>
          </li>
        </ul>
        <div className="full_ads_block">
          <img src={ads2} />
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/articledetail" component={ArticleDetail} />
        <Route path="/category" component={CategoryListing} />
        <Route path="/photogallery" component={PhotoGallery} />
        <Route path="/photodetail" component={PhotoDetail} />
        <Route path="/astrology" component={Astrology} />

      </Router>
      
      
      

      <Footer />

      <ScrollUpButton ContainerClassName="backtotop_btn" />
        
      
    </div >
  );
}

export default App;

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FaMapMarkerAlt} from 'react-icons/fa';



//css
import '../styles.css';

//components
import Greeting from './landingpage/Greeting'
import Homepage from "./Homepage";
import Order from './Order';
import Cards from './Cards';
import Gifts from './Gifts';
import Footer from "./Footer";
import Menu from "./order/Menu";
import ProductDescription from './order/ProductDescription';

//logo
import logo from "../img/logo.png";

function AppContainer() {

  const linkStyles = {
    textDecoration: 'none',
    color: 'black'
  }

  const navBorder = {
    boxShadow: '1px 5px 5px 1px#E5E5E5',
    borderBottom: '1px solid #AFAFAF'
  }

  return (

    <div>
      <div>
        <nav style={navBorder}>
          <div className="main-nav">

          <ul className="left-nav">
            <Link to="/">
              <img 
                src={logo} 
                alt="logo" 
                className="logo"
              />
            </Link>
            
            <Link to="/menu" 
              className="nav-item" 
              style={linkStyles}>
                <li>order</li>
            </Link>

            <Link to="/cards" 
              className="nav-item" 
              style={linkStyles}>
                <li>cards</li>
            </Link>

            <Link to="gifts" 
              className="nav-item" 
              style={linkStyles}>
                <li>gift</li>
            </Link>
          </ul>

          <ul className="right-nav">
              <FaMapMarkerAlt/>
              <li>Find a store</li>
              <Link to="/sign-in"><button className="nav-btn-one">Sign in</button></Link>
              <Link to="/sign-up"><button className="nav-btn-two">Join now</button></Link>
          </ul>
          </div>

          <div style={{marginLeft: '20px'}}>
            <Greeting/>
          </div>          
        </nav>
        
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/menu" component={Order}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/gifts" component={Gifts}/>
            <Route exact path="/menu/drinks/hot-coffees" component={Menu}/>
            <Route path="/menu/drinks/hot-coffees/:val" component={ProductDescription}/>
          </Switch>
        </div>
            
        <Footer/>
        </div>
    </div>
  );
}

export default AppContainer;
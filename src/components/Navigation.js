import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Order from './Order';
import Cards from './Cards';
import Gifts from './Gifts';


import logo from "../img/logo.png";

import Homepage from "./Homepage";
import Footer from "./Footer";


function Navigation() {
    return (
        <div>
            
            <nav>
                <ul className="left-nav">
                    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                    <Link to="/order"><li>order</li></Link>
                    <Link to="/cards"><li>cards</li></Link>
                    <Link to="gifts"><li>gifts</li></Link>
                </ul>

                <ul className="right-nav">
                    <li>Find a store</li>
                    <button className="nav-btn-one"><a href="#">Sign in</a></button>
                    <button className="nav-btn-two"><a href="#">Join now</a></button>
                </ul>
            </nav>
            <div>
                <Route exact path="/" component={Homepage}/>
                <Route path="/order" component={Order}/>
                <Route path="/cards" component={Cards}/>
                <Route path="/gifts" component={Gifts}/>
            </div>
            <Footer/>
        </div>
       
    )
    
}


export default Navigation;
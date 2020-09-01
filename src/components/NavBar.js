import React from "react";
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Order from './Order';
import Cards from './Cards';
import Gifts from './Gifts';

import logo from "../img/logo.png";

function NavBar() {
    return (
        <header>
            <nav className="nav-bar">
                <div class="nav-left">
                            
                    <ul>
                        <li><Link to="/"><img className="logo" src={logo} alt="logo"/></Link></li>
                        <li><Link to="/order"><a href="google.com">Order</a></Link></li>
                        <li><Link to="/cards"><a href="google.com">Cards</a></Link></li>
                        <li><Link to="/gift"><a href="google.com">Gift</a></Link></li>
                    </ul>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/order" component={Order}></Route>
                        <Route path="/cards" component={Cards}></Route>
                        <Route path="/gifts" component={Gifts}></Route>
                </div>
                {/* <div class="nav-right">
                    <ul>
                        <li><Link to="/"><a href="google.com"><button className="btn-two">Join Now</button></a></Link></li>
                        <li><Link to="/"><a href="google.com"><button className="btn-one">Sign In</button></a></Link></li>
                        <li><Link to="/"><a href="google.com"><i class="fas fa-map-marker-alt"></i>Find a store</a></Link></li>
                    </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/cards" component={Cards}></Route>
                    <Route path="/gifts" component={Gifts}></Route>
                </div> */}
            </nav>
        </header>
    )
    
}

export default NavBar
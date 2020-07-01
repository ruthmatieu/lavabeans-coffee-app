import React from "react";
import logo from "../img/logo.png";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="nav-bar">
                        <div class="nav-left">
                            
                            <ul>
                                <li><img className="logo" src={logo} alt="logo"/></li>
                                <li><a href="google.com">Order</a></li>
                                <li><a href="google.com">Cards</a></li>
                                <li><a href="google.com">Gift</a></li>
                            </ul>
                        </div>
                        <div class="nav-right">
                            <ul>
                                <li><a href="google.com"><button className="btn-two">Join Now</button></a></li>
                                <li><a href="google.com"><button className="btn-one">Sign In</button></a></li>
                                <li><a href="google.com"><i class="fas fa-map-marker-alt"></i>Find a store</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar
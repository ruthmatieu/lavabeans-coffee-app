import React from 'react';
import {Link} from 'react-router-dom';
import giftcardLogin from '../img/giftcard.png';

function Cards() {
    const imageStyle = {
        width: '375px'    
    }
    return (
        <section class="giftcard-login">
            <img src={giftcardLogin} alt="gift card" style={imageStyle}/>
            <p>
                Get a free digital LavaBeans Card when you join<br/> 
                LavaBeans® Rewards, or register a gift card you <br/>
                already have.
            </p>
            <nav>
                <ul className="right-nav">
                    <Link to="/sign-in"><button className="nav-btn-one">Sign in</button></Link>
                    <Link to="/sign-up"><button className="nav-btn-two">Join now</button></Link>
                </ul>
            </nav>
        </section>
    )
}

export default Cards;
import React from "react";
import { FaSpotify, FaFacebook, FaPinterest, FaYoutube, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    const divStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '30px',
        // backgroundColor: 'yellow',
        // border: '2px solid red'
    }

    const chevron = {
        display: 'grid',
        placeItems: 'center'
    }

    const title = {
        padding: '15px 0'
    }

    const socialIcons = {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingRight: '100px'
    }
        return (
            <div>
                <div style={divStyles}>
                    <p style={title}>About Us</p> 
                    <i className="fal fa-chevron-down" style={chevron}></i>
                </div>
                <div style={divStyles}>
                    <p style={title}>Careers Page</p>
                    <i className="fal fa-chevron-down" style={chevron}></i>
                </div>
                <div style={divStyles}>
                    <p style={title}>Social Impact</p> 
                    <i className="fal fa-chevron-down" style={chevron}></i>
                </div>
                <div style={divStyles}>
                    <p style={title}>For Business Partners</p> 
                    <i className="fal fa-chevron-down" style={chevron}></i>
                </div>
                <div style={divStyles}>
                    <p style={title}>Ways To Order</p> 
                    <i className="fal fa-chevron-down" style={chevron}></i>
                </div>

                <hr/>
                <div style={socialIcons}>
                    <FaSpotify className="social-icons"/>
                    <FaFacebook className="social-icons"/>
                    <FaPinterest className="social-icons"/>
                    <FaInstagramSquare className="social-icons"/>
                    <FaYoutube className="social-icons"/>
                    <FaTwitterSquare className="social-icons"/>
                </div>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>CA Supply Chain Act</p>
                    <p>Submit Your Idea</p>
                    <p>Cookie Preference</p>
                </div>
                <div>
                    <p>© 2020 Lavabeans Coffee Company. All rights reserved.</p>
                </div>
            </div>
        )
}
export default Footer;
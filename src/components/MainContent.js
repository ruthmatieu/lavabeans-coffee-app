import React from "react";

function MainContent(props) {
        return (
            <div className="main-content-div">
                <img className="main-content-img" src={props.image} alt=""/>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button>{props.btn}</button>
            </div>
        )
    }
export default MainContent;
import React from "react";

function RewardsBanner(props) {
        return (
            <div className="rewards-div">
                <img className="rewards-content-img" src={props.image} alt=""/>
                <p>{props.description}</p>
            </div>
        )
}

export default RewardsBanner;
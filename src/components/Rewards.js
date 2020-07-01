import React from "react";

class Rewards extends React.Component {
    render() {
        return (
            <div className="rewards-div">
                <img className="rewards-content-img" src={this.props.image} alt=""/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Rewards
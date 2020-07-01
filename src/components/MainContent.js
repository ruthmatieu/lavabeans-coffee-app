import React from "react";

class MainContent extends React.Component {
    render(){
        return (
            <div className="main-content-div">
                <img className="main-content-img" src={this.props.img} alt=""/>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <button>{this.props.btn}</button>
            </div>
        )
    }
}
export default MainContent
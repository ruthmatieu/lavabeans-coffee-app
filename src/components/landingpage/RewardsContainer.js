import React from "react";
import Rewards from "./RewardsBanner";

//images
import rewardOne from "../../img/rewardOne.png";
import rewardTwo from "../../img/rewardTwo.png";
import rewardThree from "../../img/rewardThree.png";
import rewardFour from "../../img/rewardFour.png";
import rewardFive from "../../img/rewardFive.png";


class RewardsContainer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className="rewards-header">LAVABEANS® REWARDS</h2>
                </div>
                <div className="flexbox-rewards-container">
                    <Rewards 
                    image={rewardOne} 
                    description="Let Lavabeans® Rewards add a little joy to your day"/>
                    <Rewards 
                    image={rewardTwo}
                    description="Signing up is easy and fast"/>
                    <Rewards 
                    image={rewardThree} 
                    description="Exclusive offers, personalized for you"/>
                    <Rewards 
                    image={rewardFour} 
                    description="Rewards in as few as 2–3 visits"/>
                    <Rewards 
                    image={rewardFive} 
                    description="That means free drinks, food and more 🙌"/>
                </div>
                <div>
                    <button className="rewards-btn-one">Join Now</button>
                    <button className="rewards-btn-two">Learn more</button>
                </div>
            </div>
            
        )
    }
}
export default RewardsContainer
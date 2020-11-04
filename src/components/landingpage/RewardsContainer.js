import React from "react";

//images
import rewardOne from "../../img/rewardOne.png";
import rewardTwo from "../../img/rewardTwo.png";
import rewardThree from "../../img/rewardThree.png";
import rewardFour from "../../img/rewardFour.png";
import rewardFive from "../../img/rewardFive.png";
import RewardsBanner from "./RewardsBanner";


class RewardsContainer extends React.Component {
    render() {
        const rewardsInfo = [
            {
                image: rewardOne,
                description: 'Let Lavabeans® Rewards add a little joy to your day'
            },
            {
                image: rewardTwo,
                description: 'Signing up is easy and fast'
            },
            {
                image: rewardThree,
                description: 'Exclusive offers, personalized for you'
            },
            {
                image: rewardFour,
                description: 'Rewards in as few as 2–3 visits'
            },
            {
                image: rewardFive,
                description: 'That means free drinks, food and more 🙌'
            },
        ]
        return (
            <div>
                <div>
                    <h2 className="rewards-header">LAVABEANS® REWARDS</h2>
                </div>
                <div className="flexbox-rewards-container">
                    {rewardsInfo.map(item => (
                        <RewardsBanner
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
                <div>
                    <button className="rewards-btn-one">Join now</button>
                    <button className="rewards-btn-two">Learn more</button>
                </div>
            </div>
            
        )
    }
}
export default RewardsContainer
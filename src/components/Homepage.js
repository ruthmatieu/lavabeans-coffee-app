import React from 'react';

//images
import coffeeOne from "../img/coffee-one.png";
import coffeeTwo from "../img/coffee-two.png";
import coffeeThree from "../img/coffee-three.png";
import coffeeFour from "../img/coffee-four.png";

//components
import Greeting from "./landingpage/Greeting";
import RewardsContainer from "./landingpage/RewardsContainer";
import MainContent from "./landingpage/MainContent";

function Homepage() {

    const homeData = [
        {
            id: 1,
            img: coffeeOne,
            title: "Brighten up with a free drink", 
            description: "For a limited time, get 150 Bonus Stars after your first order when you join Lavabeans Rewards—that's a free drink. Restrictions apply. See Lavabeans.com.", 
            btn: "Join now"
        },
        {
            id: 2,
            img: coffeeTwo,
            title: "Buy one, get one free", 
            description: "Check back for our deal on any handcrafted drink, select Thursdays from 2–7 pm. At participating stores.",
            btn: "Join now"
        },
        {
            id: 3,
            img: coffeeThree,
            title: "Order ahead and pay", 
            description: "Find your favorite drink or food item, customize it your way, check out and pick up in select stores.", 
            btn:"Order"
        },
        {
            id: 4,
            img: coffeeFour,
            title: "Lavabeans® Delivers on Uber Eat", 
            description: "Enjoy a $0 delivery fee on your Lavabeans favorites for a limited time (other taxes/fees apply).", 
            btn: "Order"
        },
    ]
    return (
        <div> 
            <Greeting/>
            <RewardsContainer />
            <div className="main-content-container">
                {homeData.map(item => (
                    <MainContent
                        image={item.img}
                        title={item.title}
                        desc={item.description}
                        btn={item.btn}
                    />
                ))}
            </div>
        </div>
    )
}

export default Homepage;
import React from 'react';

//css
import './styles.css';
//images
import coffeeOne from "./img/coffee-one.png";
import coffeeTwo from "./img/coffee-two.png";
import coffeeThree from "./img/coffee-three.png";
import coffeeFour from "./img/coffee-four.png";

//components
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import RewardsContainer from "./components/RewardsContainer";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <RewardsContainer />

      <div className="main-content-container"> 
        <MainContent 
          img ={coffeeOne} 
          title="Brighten up with a free drink" 
          description="For a limited time, get 150 Bonus Stars after your first order when you join Lavabeans Rewards—that's a free drink. Restrictions apply. See Lavabeans.com." 
          btn="Join now"/>

        <MainContent 
          img ={coffeeTwo}
          title="Buy one, get one free" 
          description="Check back for our deal on any handcrafted drink, select Thursdays from 2–7 pm. At participating stores." 
          btn="Join now"/>

        <MainContent 
          img ={coffeeThree}
          title="Order ahead and pay" 
          description="Find your favorite drink or food item, customize it your way, check out and pick up in select stores." 
          btn="Order"/> 

        <MainContent 
          img ={coffeeFour} 
          title="Lavabeans® Delivers on Uber Eat" 
          description="Enjoy a $0 delivery fee on your Lavabeans favorites for a limited time (other taxes/fees apply)." 
          btn="Order"/> 
      </div>

      <div>
        <Footer />
      </div>
        
    </div>
  );
}

export default App;

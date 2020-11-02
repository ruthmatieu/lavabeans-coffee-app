import React from 'react';

//components
import AppContainer from "./components/AppContainer";

//images
import coffee from './img/coffee.jpg';
import coffeeTwo from './img/coffee2.jpg';
import caffemisto from './img/coffee3.jpg';
import cappuccino from './img/coffee4.jpg';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'

function reducer() {
    return {
      mainMenuTitles: {
        drinks: {
          id: 'Drinks',
          title1: 'Hot Coffees',
          title2: 'Hot Drinks',
          title3: 'Cold Coffees',
          title4: 'Cold Drinks',
          title5: 'Hot Teas',
          title6: 'Frappuccino Blended Beverages',
          title7: 'Iced Teas'
        },
        food: {
          id: 'Food',
          title1: 'Hot Breakfast',
          title2: 'Lunch',
          title3: 'Yogurt + Custard',
          title4: 'Bakery',
          title5: 'Snacks + Sweets'
        },
        coffeeHome: {
          id: 'Coffee at Home',
          title1: 'Whole Bean',
          title2: 'VIA Instant',
          title3: 'Verismo Pods'
        }
      },
      coffeeTypes : {
        hotCoffees: [
          //AMERICANOS
          {
            title: 'Americanos',
            id: 'caffe-americano',
            header: 'Hot Coffees',
            image: coffee,
            name: 'Caffè Americano',
            //nutritional details
            desc: `Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.
            Pro Tip: For an additional boost, ask your barista to try this with an extra shot.`,
            size: 16,
            calories: 15,
            calFat: 0,
            totalFat: 0,
            satFat: 0,
            transFat: 0,
            cholesterol: 0,
            sodium: 10,
            sodiumPercent: 0,
            totalCarbs: 2,
            dietaryFiber: 0,
            sugars: 0,
            protein: 1,
            proteinPercent: 2,
            caffeine: 225,
            ingredients: 'Brewed Coffee',
            allergens: 'Not available for this item'
          },
          //BREWED COFFEES
          {
            title: 'Brewed Coffees',
            id: 'blonde-roast',
            image: coffeeTwo,
            name: 'Blonde Roast',
            //nutritional details
            desc: `Lightly roasted coffee that's soft, mellow and flavorful. Easy-drinking on its own and delicious with milk, sugar or flavored with vanilla, caramel or hazelnut.`,
            size: 16,
            calories: 5,
            calFat: 0,
            totalFat: 0,
            satFat: 0,
            transFat: 0,
            cholesterol: 0,
            sodium: 10,
            sodiumPercent: 0,
            totalCarbs: 0,
            dietaryFiber: 0,
            sugars: 0,
            protein: 1,
            proteinPercent: 2,
            caffeine: 360,
            ingredients: 'Brewed Coffee',
            allergens: 'Not available for this item'
        },
        {
            id: 'caffe-misto',
            image: caffemisto,
            name: 'Caffè Misto'
        },
        {
            id: 'caffe-dark-raost-coffee',
            image: coffeeTwo,
            name: 'Caffè Featured LavaBeans® Dark Roast Coffee'
        },
        {
            id: 'pike-place-roast',
            image: coffeeTwo,
            name: 'Pike Place Roast'
        },
        {
            id: 'decaf-pike-place-roast',
            image: coffeeTwo,
            name: 'Decaf Pike Place Roast'
        },
        //CAPPUCCINOS
        {
            id: 'cappuccino',
            title: 'Cappuccinos',
            image: cappuccino,
            name: 'Cappuccino'
        },
        //ESPRESSO SHOTS
        {
            id: 'espresso',
            title: 'Espresso Shots',
            image: coffee,
            name: 'Espresso'
        },
        {
            id: 'espresso-con-panna',
            image: coffee,
            name: 'Espresso Con Panna'
        },
        //FLAT WHITES
        {
            id: 'flat-white',
            title: 'Flat Whites',
            image: 'this is the image',
            name: 'Flat White'
        },
        {
            id: 'almondmilk-honey-flat-white',
            image: 'this is the image',
            name: 'Almondmilk Honey Flat White with LavaBeans® Blonde Espresso'
        },
          
        ] 
      }
    }
}
const store = createStore(reducer)

function App() {

  return (

    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

export default App;

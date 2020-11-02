//HOT COFFEES

import coffee from '../img/coffee.jpg';
import coffeeTwo from '../img/coffee2.jpg';
import caffemisto from '../img/coffee3.jpg';
import cappuccino from '../img/coffee4.jpg';

//coffee size is 1100 x 1100

export default [

    //hot coffees
    {
        id: 'caffe-americano',
        header: 'Hot Coffees',
        title: 'Americanos',
        image: coffee,
        name: 'Caffè Americano',

        //details
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
    //brewed coffees
    {
        id: 'blonde-roast',
        title: 'Brewed Coffees',
        image: coffeeTwo,
        name: 'Blonde Roast',
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
    //Cappuccinos
    {
        id: 'cappuccino',
        title: 'Cappuccinos',
        image: cappuccino,
        name: 'Cappuccino'
    },
    //Espresso Shots
    {
        id: 'espresso',
        title: 'Expresso Shots',
        image: coffee,
        name: 'Espresso'
    },
    {
        id: 'espresso-con-panna',
        image: coffee,
        name: 'Espresso Con Panna'
    },
    //Flat Whites
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


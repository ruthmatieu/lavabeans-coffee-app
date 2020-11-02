import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import coffee from '../img/coffee.jpg';
// import axios from 'axios';

//redux
import { connect } from 'react-redux';

function Order(props) {
    // const [menuItems, setMenuItems] = useState([]);

    // useEffect( () => {
    //     //ttps://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    //     axios.get(`https://api.jikan.moe/v3/manga/1/characters`)
    //     .then(res => {
    //         console.log('response:', res)
    //         setMenuItems(res.data.characters)
    //     })
    //     .catch(err => {
    //         console.log('error:', err)
    //     })
    // },[])

    return (
        <div>
            <h1>Menu</h1>
            {/* {menuItems.map(item => (
                <div>
                    <p>{item.name}</p>
                    <img src={item.image_url} alt={item.name} className="product-image"/>
                </div>
            ))} */}
            <div>
                <h2>{props.mainMenuTitles.drinks.id}</h2>
                <hr/>
                <div className="drinks-div-flex">
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link to="/menu/drinks/hot-coffees"><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title2}</h3>
                        </div>
                        <div className="coffee-card">
                            
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title3}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title4}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title5}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title6}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.drinks.title7}</h3>
                        </div>
                    </div> 
                </div>
                
            </div>

            <div>
                <h2>{props.mainMenuTitles.food.id}</h2>
                <hr/>
                <div className="drinks-div-flex">
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.food.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.food.title2}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.food.title3}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.food.title4}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.food.title5}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>{props.mainMenuTitles.coffeeHome.id}</h2>
                <hr/>
                <div className="drinks-div-flex">
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.coffeeHome.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.coffeeHome.title2}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3>{props.mainMenuTitles.coffeeHome.title3}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        mainMenuTitles: state.mainMenuTitles
    }
}
export default connect(mapStateToProps, {})(Order);
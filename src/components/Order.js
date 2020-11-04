import React from 'react';
import { Link } from 'react-router-dom';
//coffee images
import coffee from '../img/menu/americano-main.png';
import chaiLatte from '../img/menu/chai_latte-main.png';
import saltedCaramel from '../img/menu/salted_caramel_hot_chocolate-main.png';
import pumpkinSpice from '../img/menu/pumpkin_spice_coffee.png';
import pumpkinCream from '../img/menu/pumpkin_cream-main.png';
import sparklingBlood from '../img/menu/teavana_sparkling_blood-main.png';
import guavaPassionfruit from '../img/menu/guava_passionfruit.png';


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

    const fontStyle = {
        fontWeight: '400', 
        marginLeft: '20px'
    }

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
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            
                            <Link><img src={chaiLatte} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title2}</h3>
                        </div>
                        <div className="coffee-card">
                            
                            <Link><img src={saltedCaramel} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title3}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={pumpkinSpice} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title4}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={pumpkinCream} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title5}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={sparklingBlood} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title6}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={guavaPassionfruit} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.drinks.title7}</h3>
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
                            <h3 style={fontStyle}>{props.mainMenuTitles.food.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.food.title2}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.food.title3}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.food.title4}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.food.title5}</h3>
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
                            <h3 style={fontStyle}>{props.mainMenuTitles.coffeeHome.title1}</h3>
                        </div>
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.coffeeHome.title2}</h3>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="coffee-card">
                            <Link><img src={coffee} alt="" className="order-menu-img"/></Link>
                            <h3 style={fontStyle}>{props.mainMenuTitles.coffeeHome.title3}</h3>
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
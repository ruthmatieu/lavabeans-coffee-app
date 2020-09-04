import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import axios from 'axios';

function Order() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect( () => {
        //ttps://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
        axios.get(`https://api.jikan.moe/v3/manga/1/characters`)
        .then(res => {
            console.log('response:', res)
            setMenuItems(res.data.characters)
        })
        .catch(err => {
            console.log('error:', err)
        })
    },[])

    return (
        <div>
            <h1>Menu</h1>
            {menuItems.map(item => (
                <div>
                    <p>{item.name}</p>
                    <img src={item.image_url} alt={item.name} className="product-image"/>
                </div>
            ))}
            <MenuItems menuTitle="Drinks"/>
            <MenuItems menuTitle="Food"/>
            <MenuItems menuTitle="At Home Coffee"/>
            <MenuItems menuTitle="Merchandise"/>
        </div>
    )
}

export default Order;
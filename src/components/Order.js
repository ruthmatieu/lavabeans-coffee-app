import React from 'react';
import MenuItems from './MenuItems';

function Order() {
    return (
        <div>
            <h1>Menu</h1>
            <MenuItems menuTitle="Drinks"/>
            <MenuItems menuTitle="Food"/>
            <MenuItems menuTitle="At Home Coffee"/>
            <MenuItems menuTitle="Merchandise"/>
        </div>
    )
}

export default Order;
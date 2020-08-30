import React from 'react';
import { Link, Route } from 'react-router-dom';

function MenuItems(props) {
    return (
        <div>
            <Link><h2>{props.menuTitle}</h2></Link>
            <Route></Route>
        </div>
    )
}

export default MenuItems;
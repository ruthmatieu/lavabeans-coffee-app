import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

//redux
import { connect } from 'react-redux';

function Menu(props) {

    return (
        <div className="book-list">
            {/* {data.map(item => (
                    <div key={item.id}>
                            <h2>{item.header}</h2>
                            <h3>{item.title}</h3>
                            <div style={{display:'flex'}}>
                                <div>
                                    <Link to={`/menu/drinks/hot-coffees/${item.id}`}><img src={item.image} alt={item.name} className="menu-data-img"/></Link>
                                    <Link to={`/menu/drinks/hot-coffees/${item.id}`}><p>{item.name}</p></Link>
                                </div>
                            </div>
                    </div>
            ))} */}

            {props.coffeeTypes.hotCoffees.map(item => {
                return (
                    <Counter
                        key={item.id}
                        {...item}
                    />
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        coffeeTypes: state.coffeeTypes
    }
}

export default connect(mapStateToProps, {})(Menu);
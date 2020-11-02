import React from 'react';
import HotCoffee from './HotCoffee';

//redux
import { connect } from 'react-redux';

function Menu(props) {

    return (
        <div>
            {props.coffeeTypes.hotCoffees.map(item => {
                return (
                    <HotCoffee
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
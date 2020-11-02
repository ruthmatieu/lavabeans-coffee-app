import React from 'react';
import { useParams } from 'react-router-dom';
//redux
import { connect } from 'react-redux';

const nutritionInfo = `
    Nutrition information is calculated based on our standard recipes. 
    Only changing drink size will update this information. Other 
    customizations will not.`

const calorieInfo = `* 2,000 calories a day is used for general nutrition 
    advice, but calorie needs vary.`

const legal = `We cannot guarantee that any unpackaged products served in 
    our stores are allergen-free because we use shared equipment to store, 
    prepare, and serve them. Customers with allergies can find ingredient 
    information for products on the labels of our packaged products or online 
    at LavaBeans.com/menu.`

function ProductDescription(props) {

    const params = useParams();

    const product = props.coffeeTypes.hotCoffees.find(thing => `${thing.id}` === params.val)

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
        <div>
            <div>
                <img src={product.image} alt={product.name} className="menu-data-details-img"/>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>      
            </div>
            {/* insert the form */}
            
            <div className="nutrition">
                <div>
                    <h3>Nutrition Information</h3>
                    <p>{nutritionInfo}</p>
                    <p>Serving Size {product.size} fl oz</p>
                    <div style={style}>
                        <p><span>Calories</span> {product.calories}</p>
                        <p>Calories from Fat {product.calFat}</p>
                    </div><hr/>
                    <p>% Daily Value *</p><hr/>
                    <p><span>Total Fat</span> {product.totalFat} g</p><hr/>
                    <p>Saturated Fat {product.satFat} g</p><hr/>
                    <p>Trans Fat {product.transFat} g</p><hr/>
                    <p><span>Cholesterol</span> {product.cholesterol} mg</p><hr/>
                    <div style={style}>
                        <p><span>Sodium</span> {product.sodium} mg</p>
                        <p>{product.sodiumPercent}%</p>
                    </div><hr/>
                    
                    <p><span>Total Carbohydrates</span> {product.totalCarbs} g</p><hr/>
                    <p>Dietary Fiber {product.dietaryFiber} g</p><hr/>
                    <p>Sugars {product.sugars} g</p><hr/>
                    <div style={style}>
                        <p><span>Protein</span> {product.protein} g</p>
                        <p>{product.proteinPercent}%</p>
                    </div><hr/>
                    
                    <p><span>Caffeine</span> {product.caffeine} mg</p><hr/>
                    <p>{calorieInfo}</p>
                    <h3>Ingredients</h3>
                    <p><span>{product.ingredients}</span></p>
                    <h3>Allergens</h3>
                    <p>{product.allergens}</p>
                    <p>{legal}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coffeeTypes: state.coffeeTypes
    }
}

export default connect(mapStateToProps, {})(ProductDescription);


import React from "react"
import "../css/index.css"
import ToppingOption from "./ToppingOption";
import ToppingIcon from "./ToppingIcon";


function ToppingSelect({ toppingOptions, toppingPrice, handleToppingOptionClick }) {
    return (
        <div className='topping-select'>
            <h2>Toppings</h2>
            <ul className='toppings-info'>
                <li><ToppingIcon iconType={ 'vegetarian' } /> Vegetarian</li>
                <li><ToppingIcon iconType={ 'gluten free' } /> Gluten Free</li>
                <li><ToppingIcon iconType={ 'hot' } /> Hot & Spicy</li>
            </ul>
            <p className='toppings-info'>Toppings charged at { `INR:${toppingPrice}` } each.</p>
            <ul className='topping-options' onClick={ handleToppingOptionClick }>
                { toppingOptions.map(topping => <ToppingOption key={ topping[0] } topping={ topping[0] } amount ={topping[1].amount} toppingIcons={ topping[1].icons } />) }
            </ul>
        </div >
    );
}

export default ToppingSelect

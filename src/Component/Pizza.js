import React from "react"
import "../css/index.css"
import PizzaTopping from "./PizzaTopping";

function Pizza({ toppingOptions, selectedToppings }) {
    return (
        <div className='pizza-container'>
            <div className='pizza'>
                { selectedToppings.map(topping =>
                    <PizzaTopping key={ topping } topping={ topping } toppingAmount={ toppingOptions[topping].amount } />) }
            </div>
        </div>
    );
}

export default Pizza

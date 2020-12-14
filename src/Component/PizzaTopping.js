import React from "react"



function PizzaTopping({ topping, toppingAmount }) {

    let toppings = [];

    for (let i = 1; i <= toppingAmount; i++) {
        toppings.push(<div key={ `${topping + i}` } className={ `topping ${topping} ${topping}-${i} ` } ></div>);
    }

    return toppings;
}

export default PizzaTopping

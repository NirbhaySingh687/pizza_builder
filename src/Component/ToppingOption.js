import React from "react"
import "../css/index.css"
import ToppingIcon from "./ToppingIcon";

function ToppingOption({ topping, toppingIcons ,amount}) {
    return (
        <li className='topping-option'>
            <input type='checkbox' id={ topping } className='topping-input' />
            <label className='topping-label' htmlFor={ topping } aria-label={ `${topping} (${toppingIcons.map(icon => icon)})` }>
                <span className='topping-label-content'>
                    <span className='topping-label-text'>
                        { topping }
                    </span>
                     <span className='topping-label-text'>
                       Rs: { amount }
                    </span>
                    <span className='topping-label-icons'>
                        { toppingIcons.map(icon => <ToppingIcon key={ icon } iconType={ icon } />) }
                    </span>
                </span>
            </label>
        </li>
    );
}

export default ToppingOption

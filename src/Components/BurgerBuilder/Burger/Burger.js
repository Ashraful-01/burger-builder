import React from 'react';
import Ingredient from '../Ingreadient/Ingreadient';



const Burger = props => {
    return (
        <div>
            <Ingredient type="bread-top" />
            <Ingredient type="meat" />
            <Ingredient type="salad" />
            <Ingredient type="meat" />
            <Ingredient type="cheese" />
            <Ingredient type="bread-bottom" />
        </div>
    )

}

export default Burger;
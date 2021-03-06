import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
import { object } from 'prop-types';


const burger=(props)=>{
    let transformedIngredient = Object.keys(props.ingredient)
        .map(igKey =>{
            return [...Array(props.ingredient[igKey])].map((_, i)=>{
               return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el)

        },[])
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding something!!</p>

    }    
        console.log(transformedIngredient)
  
   
    return(
        <div className="burger">
            <BurgerIngredient  type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient  type="bread-bottom"/>
        </div>
    )

}


export default burger;
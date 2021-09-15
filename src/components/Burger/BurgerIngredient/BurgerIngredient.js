import React, { Component } from 'react'
import PropsType from 'prop-types';
import './BurgerIngredient.css'



class burgerIngredient extends Component{
    

    render(){
        let ingredient = null;
        switch (this.props.type){
            case('bread-bottom'):
                ingredient = <div className="breadbottom"></div>
                break;
            case('bread-top'):
                ingredient = (
                    <div className="breadtop">
                        <div className="seed1"></div>
                        <div className="seed2"></div>                
                    </div>    
    
                )
                break;
            case('meat'):
                ingredient = <div className="meat"></div>
                break;
            case('cheese'):
                ingredient = <div className="cheese"></div>
                break;
            case('salad'):
                ingredient = <div className="salad"></div>
                break;
            case('bacon'):
                ingredient = <div className = "bacon"></div>
                break;
            default:
                ingredient = null;    
    
        }
        return ingredient
    

    }
}
burgerIngredient.PropsType = {
    type: PropsType.string.isRequired
}


export default burgerIngredient
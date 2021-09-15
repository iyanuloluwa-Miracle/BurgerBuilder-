import React, { Component } from 'react'
import Aux from '../../Auxillary/Auxillary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControl/BuildControls'

const INGREDIENT_PRICE = {
    salad:0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component{

    state = {
        ingredient:{
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredient:updatedIngredient}) 
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredient:updatedIngredient}) 

    }
    render(){
        return(
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}/>
                
            </Aux>
        )
    }
}

export default BurgerBuilder;
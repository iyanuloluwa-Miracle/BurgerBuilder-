import React, { Component } from 'react'
import Aux from '../../Auxillary/Auxillary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControl/BuildControls'
import { object } from 'prop-types';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order'


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
        totalPrice: 4,
        purchasable:false,
        purchase:false
    }
    updatePurchaseState(ingredient){
        
        const sum = Object.keys(ingredient)
            .map(igKey =>{
                return ingredient[igKey]

            })
            .reduce((sum, el) =>{
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0})    
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
        this.updatePurchaseState(updatedIngredient) 
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0) {
            return;

        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredient:updatedIngredient})
        this.updatePurchaseState(updatedIngredient)  

    }
    purchaseHandler=()=>{
        this.setState({purchase:true})
    }
    purchaseCancelHandler = () =>{
        this.setState({purchase:false})

    }
    purchaseContinueHandler = () =>{

        const order = {
            ingredient:this.state.ingredient,
            price: this.state.totalPrice,
            customer:{
                name: 'Dina iyanuloluwa',
                address:{
                    street:'barcelona streets',
                    zipcode:"6787034",
                    country:'Germany'
                },
                email:'nex@gmail.com'
            },
            deliverlyMethod:'fatest method'
        }
        //alert('You Can Continue');
        axios.post('/orders.json',order)
            .then(response =>console.log(response))
            .catch(error =>console.log(error))

    }


    render(){
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0

        }
        return(
            <Aux>
                <Modal>
                    <OrderSummary 
                        ingredient = {this.state.ingredient}
                        price = {this.state.totalPrice}
                        purchaseContinue = {this.purchaseCancelHandler}
                        purchaseCancel = {this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable ={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
                
            </Aux>
        )
    }
}

export default BurgerBuilder;
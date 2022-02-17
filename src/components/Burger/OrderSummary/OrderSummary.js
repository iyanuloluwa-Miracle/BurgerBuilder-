import React from 'react'
import Aux from '../../../Auxillary/Auxillary'
import Button from '../../UI/Button/Button'


function OrderSummary(props) {

    const ingredientSummary = Object.keys(props.ingredient)
        .map(igKey =>{
            return  (<li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredient[igKey]}</li>)
        })
   
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}

            </ul>

            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</button>
            <button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</button>
        </Aux>
    )
}

export default OrderSummary

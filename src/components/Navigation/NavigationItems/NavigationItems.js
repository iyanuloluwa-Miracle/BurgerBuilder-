import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem'

function NavigationItems(props) {
    return (
        <div>
            <ul className="NavigationItems">
              
                <NavigationItem link="./" active>BurgerBuilder</NavigationItem>
                <NavigationItem link="./">Checkout</NavigationItem>
            </ul>
            
        </div>
    )
}

export default NavigationItems

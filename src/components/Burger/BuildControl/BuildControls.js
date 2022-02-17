import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl.js/BuildControl'

const controls = [
    {label : 'Salad',type:'salad'},
    {label : 'Bacon',type:'bacon'},
    {label : 'Cheese',type:'cheese'},
    {label : 'Meat',type:'meat'}
]

const buildControl = (props) =>{
    return(
        <div className="BuildControl">
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl =>(
                <BuildControl 
                key={ctrl.label}
                //type={ctrl.type} 
                label={ctrl.label}
                added = {() => props.ingredientAdded (ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}/>
            ))}
            <button 
                className="OrderButton"
                purchasable = {!props.purchasable} onClick={props.ordered}>ORDER NOW</button>

        </div>

    )
    

}

export default buildControl;
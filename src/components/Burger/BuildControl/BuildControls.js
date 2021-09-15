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
            {controls.map(ctrl =>(
                <BuildControl 
                key={ctrl.label}
                //type={ctrl.type} 
                label={ctrl.label}
                added = {() => props.ingredientAdded (ctrl.type)}/>
            ))}

        </div>

    )
    

}

export default buildControl;
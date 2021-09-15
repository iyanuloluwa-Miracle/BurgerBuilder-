import React from 'react'
import './BuildControl.css'
const buildControl = (props) =>{
    return(
        <div className="BuildControl">
            <div>{props.label}</div>
            <button className="BuildControl">Less</button>
            <button className="BuildControl" onClick={props.added}>More</button>
        </div>


    )
   
}
export default buildControl;
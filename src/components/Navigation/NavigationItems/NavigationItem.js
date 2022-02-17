import React from 'react'
import './NavigationItem.css'
import classes from './NavigationItems.css'


function NavigationItem(props) {
    return (
        <div className="NavigationItem">
            <li a href={props.link}
                className={props.active ? classes.active : null}>{props.children}
            </li>
            
        </div>
    )
}

export default NavigationItem

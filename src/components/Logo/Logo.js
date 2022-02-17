import React from 'react'
import burgerLogo from '../../assets/Images/133 burger-logo.png'
import  './Logo.css'

function Logo(props) {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={burgerLogo} alt="burgerlogo"/>
            
        </div>
    )
}

export default Logo

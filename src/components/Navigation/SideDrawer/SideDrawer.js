import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

function SideDrawer() {
    return (
        <div className="SideDrawer">
            
            <Logo height="11%" style={{padding:"32px"}} />
            <nav>
                <NavigationItems />
            </nav>
            
        </div>
    )
}

export default SideDrawer

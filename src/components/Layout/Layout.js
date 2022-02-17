import React from 'react'
import Aux from '../../Auxillary/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';




const style = {
    marginTop:"16px",


}
const layout=(props)=>(
    
    <Aux>
       <Toolbar/>
       <SideDrawer />
        <main style = {style}>
            {props.children}
        </main>

    </Aux>
    

);

export default layout;
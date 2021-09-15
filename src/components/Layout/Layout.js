import React from 'react'
import Aux from '../../Auxillary/Auxillary';




const style = {
    marginTop:"16px",


}
const layout=(props)=>(
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
     
        </div>
        <main style = {style}>
            {props.children}
        </main>

    </Aux>
    

);

export default layout;
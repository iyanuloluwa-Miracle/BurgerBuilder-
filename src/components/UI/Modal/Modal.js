import React from 'react'
import './Modal.css'
import Aux from '../../../Auxillary/Auxillary'




const Modal=(props)=> {
    return (
        <Aux>  
            <div className="Modal">
                {props.children}            
            </div>
            
        </Aux>
      
    )
}

export default Modal

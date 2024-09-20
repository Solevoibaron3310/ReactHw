import React from "react";


const Button2 = (props) => {
    const {children, onClick} = props
    return(
        <button type="button" 
        className="button2" 
        onClick={onClick}>
            {children}
            
        </button>
    )
}

export default Button2
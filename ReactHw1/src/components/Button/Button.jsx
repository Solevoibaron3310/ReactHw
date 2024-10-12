import React from "react";

const Button1 = (props) => {
    const {children, onClick} = props
    return (

        <button 
        type="button" 
        className="button1" 
        onClick={onClick}>
                {children}
                
        </button>
    )
}

export default Button1;
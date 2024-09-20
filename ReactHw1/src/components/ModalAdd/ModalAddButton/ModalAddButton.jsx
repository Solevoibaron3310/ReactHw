import React from "react";

const ButtonAdd = (props) => {
    const {children, onClick} = props
    return (
        <button className="AddBtn" onClick={onClick}>{children}</button>
    )
}

export default ButtonAdd
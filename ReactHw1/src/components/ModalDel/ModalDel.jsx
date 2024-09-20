import React from "react";
// import ModalDelHeader from "./ModalDelHeader/ModalDelHeader.jsx";

const ModalDel = (props) => {
    const {isOpen, children} = props
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="ModalDel">
            {children}
        </div>
    )
}

export default ModalDel
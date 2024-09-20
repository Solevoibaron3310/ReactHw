import React from "react";

const ModalAdd = (props) => {
    const {isOpen, children} = props
    if (!isOpen) {
        return null;
    }

    return (
        <div className="ModalAdd">
            {children}
        </div>
    )
}

export default ModalAdd
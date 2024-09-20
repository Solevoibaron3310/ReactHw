import React from "react";

const Description = (props) => {
    const {children} = props
    return (
        <p className="ModalAdd-Description">
            {children}
        </p>
    )
}

export default Description
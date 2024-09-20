import React from "react";

const Close = ({onClick}) => {

    return (
        <img src="src/components/ModalAdd/ModalAddClose/ModalAddCloseImg/close cross.png" 
        alt="" 
        className="CloseImg" 
        onClick={onClick}/>
    )
}

export default Close
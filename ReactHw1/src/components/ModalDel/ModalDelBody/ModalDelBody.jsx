import React from "react";


const MainText = ({Title, Description}) => {

    return (
        <div className="ModalText">
        {Title && (
            <h2 className="Main_Title">{Title}</h2>
        )}
        {Description && (
            <p className="description">{Description}</p>
        )}
        </div>
    )
}

export default MainText
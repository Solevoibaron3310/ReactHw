import React from "react";

const Title = (props) => {
    const {children} = props;
    return (
        <h1 className="Modal1-title">{children}</h1>
    )
}

export default Title
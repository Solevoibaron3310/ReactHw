import React from "react";

const Header = (props) => {
 const {children} = props

 return (
   <div className="headerModal">{children}</div>
    
)

}

export default Header;
import React from "react";
import PropTypes from "prop-types";

import styles from './HeaderButton.module.scss'

const HeaderButton = ({type, label, onClick}) => {

    return (
        <button className={styles.HeaderButton} 
                onClick={onClick} 
                type={type}>
                    {label}
        </button>
    )
}

HeaderButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,  
  };

export default HeaderButton
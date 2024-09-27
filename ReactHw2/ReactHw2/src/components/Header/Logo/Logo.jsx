import React from "react";
import PropTypes from "prop-types";

import styles from './Logo.module.scss'

const Logo = ({logoSrc, alt}) => {

    return (
        <img className={styles.Logo}
         src={logoSrc}
          alt={alt} />
    )
}

Logo.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Logo
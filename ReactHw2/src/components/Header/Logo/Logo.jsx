import React from "react";
import PropTypes from "prop-types";

import styles from './Logo.module.scss'

const Logo = ({src, alt}) => {

    return (
        <img className={styles.Logo} src={src} alt={alt} />
    )
}

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Logo
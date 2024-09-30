import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ShopCard.module.scss";
import { BuyContext } from '../../../BuyContext/BuyContext.jsx'

const Card = ({src}) => {
    const { buy } = useContext(BuyContext)

    return (
        <>

        <Link  to="/buy"><img className={styles.cart} src={src} alt="BuyCart" /></Link>
        <span className={styles.counter}>{buy.length}</span>
        
        </>
    )
}

Card.propTypes = {
    src: PropTypes.string.isRequired
}

export default Card
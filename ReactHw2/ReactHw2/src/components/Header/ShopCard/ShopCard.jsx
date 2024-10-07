import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ShopCard.module.scss";
import { useSelector } from "react-redux";


const Card = ({src}) => {
    const buy = useSelector((state) => state.cart.cart)

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
import React from "react";
import PropTypes from "prop-types";
import styles from "./MenCard.module.scss";

const Card = ({src, alt, name, cost, brand, srcFav}) => {
    return (
        <div className={styles.Card}>
            <img className={styles.img} src={src} alt={alt} />
            <img className={styles.addToFav} src={srcFav} alt="Add to favorites" />
            <div className={styles.cardsTxt}>
                <h2 className={styles.productName}>
                    {name}
                    <span className={styles.brand}>{brand}</span>
                </h2>
                <span className={styles.productCost}>
                    {cost}
                </span>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    srcFav: PropTypes.string 
};

Card.defaultProps = {
    srcFav: "", // по умолчанию, если srcFav не передан
};

export default Card;

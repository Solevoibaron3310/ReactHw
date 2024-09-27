
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MenCard.module.scss";

const Card = ({ img, alt, name, cost, brand, srcFav, onFavClick, item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavClick(item); 

  };

  return (
    <div className={styles.Card}>
      <img className={styles.img} src={img} alt={alt} />
      <img 
        className={`${styles.addToFav} ${isFavorite ? styles.favorite : ''}`} 
        src={srcFav} 
        alt="Add to favorites"
        onClick={handleFavoriteClick} 
      />
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
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  srcFav: PropTypes.string,
  onFavClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,  
};

Card.defaultProps = {
  srcFav: "/images/heart.png", 
};

export default Card;


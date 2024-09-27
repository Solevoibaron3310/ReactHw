import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./HeaderFav.module.scss";
import { FavoriteContext } from "../../../FavContext/FavContext.jsx"; 

const FavBtn = ({ src }) => {
  const { favorites } = useContext(FavoriteContext); 
  console.log(favorites)

  return (
    <>
      <img className={styles.img} src={src} alt="Favorites" />
      <span className={styles.counter}>{favorites.length}</span>
    </>
  );
};

FavBtn.propTypes = {
  src: PropTypes.string.isRequired, 
};

export default FavBtn; 

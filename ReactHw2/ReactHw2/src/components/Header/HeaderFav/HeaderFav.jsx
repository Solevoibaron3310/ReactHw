import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import styles from './HeaderFav.module.scss'


const HeaderFav = () => {
  const favourites = useSelector((state) => state.favourites.favourites); // Получаем избранные элементы из состояния

  return (
    <>
    <Link to="/FavouritePage">
      <img  src="./images/heart.png" alt="" />
    </Link>
      <span className={styles.counter}>{favourites.length}</span>
      
   </>
  );
};

export default HeaderFav;

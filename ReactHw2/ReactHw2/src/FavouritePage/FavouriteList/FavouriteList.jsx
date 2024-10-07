import React, { useEffect } from 'react';
import FavoriteCard from './FavouriteCard/FavouriteCard.jsx'; 
import PropTypes from 'prop-types';
import styles from './FavouriteList.module.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToFavourites } from '../../store/slices/favourite.slice.js'; // Импорт действия

const FavoriteList = ({ label, addToBuy, addToFavorites }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    dispatch(addToFavourites(storedFavourites)); // Устанавливаем избранное из localStorage
  }, [dispatch]);

  return (
    <div className={styles.favoriteList}>
      <h2 className={styles.ListLabel}>{label}</h2>
      
      {favourites.length > 0 ? (
        favourites.map((item) => (
          <FavoriteCard 
            key={item.id} 
            item={item} 
            addToFavorites={addToFavorites} // Не забудьте передать функцию
            addToBuy={addToBuy} // Передаем функцию покупки
          />
        ))
      ) : (
        <p>Список избранных пуст.</p>
      )}
    </div>
  );
};

FavoriteList.propTypes = {
  label: PropTypes.string.isRequired,
  addToBuy: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func,
};

export default FavoriteList;


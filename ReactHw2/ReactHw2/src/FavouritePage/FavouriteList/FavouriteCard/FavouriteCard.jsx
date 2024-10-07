import React, { useState } from 'react';
import styles from './FavouriteCard.module.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToFavourites } from '../../../store/slices/favourite.slice';
import { addToCart } from '../../../store/slices/shopCart.slice';

const FavoriteCard = ({ item, addToFavorites, addToBuy }) => { 
    const dispatch = useDispatch(); 

    const handleFavouriteClick = () => {
        dispatch(addToFavourites(item)); // Передаем объект в слайс
    };
  

    const handleBuyClick = () => {
           dispatch(addToCart(item));
           console.log(item)
    };
    
    return (
        <div className={styles.favoriteCard}>
            <button className={styles.delbtn} onClick={() => handleFavouriteClick(item)}>
                {item.isFav ? 'X' : 'Добавить в избранное'}
            </button>
            <img className={styles.img} src={item.img} alt="" />
            <div className={styles.textContainer}>
                <h3 className={styles.maintext}>{item.name}</h3>
                <p className={styles.maintext}>Color: <span className={styles.secondary}>{item.color}</span></p>
                <p className={styles.maintext}>Quantity: <span className={styles.secondary}>1</span></p>
            </div>

            <div className={styles.costAndAdd}>
                <span className={styles.cost}>{item.cost}</span>
                <button 
                    onClick={handleBuyClick} 
                    className={styles.addToCard}
                >
                    {item.inCard ? 'In Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default FavoriteCard;

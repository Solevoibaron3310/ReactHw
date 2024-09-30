import React, { useState } from 'react';
import styles from './FavouriteCard.module.scss';

const FavoriteCard = ({ item, addToFavorites, addToBuy }) => { 

  

    const handleBuyClick = () => {
            addToBuy(item); 
    };
    return (
        <div className={styles.favoriteCard}>
            <button className={styles.delbtn} onClick={() => addToFavorites(item)}>
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

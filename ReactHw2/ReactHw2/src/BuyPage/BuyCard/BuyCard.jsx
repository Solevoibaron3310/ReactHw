import React from 'react';
import styles from './BuyCard.module.scss';

const BuyCard = ({ item, addToBuy, removeFromBuy }) => {
    
    const handleRemoveClick = () => {

        removeFromBuy(item)
        try {
            removeFromBuy(item.id); 
            console.log(item.id)
        } catch (error) {
            console.log("You havent deleated your crad")
        }
        
    
    };

    return (
            <div className={styles.buyCard}>
                <img className={styles.img} src={item.img} alt={item.name} />
                <div className={styles.fullInfo}>
                    <h3 className={styles.mainTxt}>{item.name}</h3>
                    <p className={styles.secondaryTxt}>Color: {item.color}</p>
                    <p className={styles.secondaryTxt}>Size: M</p>
                </div>
                <div className={styles.countWrapper}>
                    <p className={styles.money}>{item.cost}</p>
                    <p className={styles.shipping}>FREE</p>
                    <p className={styles.money}>{item.cost}</p>
                    <button className={styles.delBtn} onClick={handleRemoveClick}>X</button>
                </div>
            </div>
    );
};

export default BuyCard;

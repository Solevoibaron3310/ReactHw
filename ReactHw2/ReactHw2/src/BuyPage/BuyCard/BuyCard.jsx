import React from 'react';
import styles from './BuyCard.module.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart, removeFromCart } from '../../store/slices/shopCart.slice';

const BuyCard = ({item}) => {
    const dispatch = useDispatch();

    const hendleCartClick = () => {
        dispatch(addToCart(item))
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item.id));
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
                    <button className={styles.delBtn} onClick={handleRemoveFromCart}>X</button>
                </div>
            </div>
    );

};
export default BuyCard;

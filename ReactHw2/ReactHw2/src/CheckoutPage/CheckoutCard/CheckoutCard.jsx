import React from 'react';
import styles from './Checkout.module.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart, removeFromCart } from '../../store/slices/shopCart.slice';

export const CheckoutCard = ({item}) => {
    const dispatch = useDispatch();
    const hendleCartClick = () => {
        dispatch(addToCart(item))
    };

    return (
    <div className={styles.buyCard}>
        <img className={styles.img} src={item.img} alt={item.name} />
        <div className={styles.fullInfo}>
            <h3 className={styles.mainTxt}>{item.name}</h3>
            <p className={styles.secondaryTxt}>Color: {item.color}</p>
        </div>
            <p className={styles.money}>
                <span className={styles.length}>
                    {item.length}
                </span>
                
                {item.cost}
            </p>
    </div>
    )



}








import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutLinker.module.scss'

const Linker = () => {

    return (
        <>
        <div className={styles.linkWrapper}>
                <Link to="/"><span className={styles.unactiveLink}>Home</span></Link>
                <img className={styles.vector} src="./images/left (Stroke).png" alt="" />
                
                <Link to="/checkout"><span className={styles.activeLink}>Checkout</span></Link>
            </div>
        </>
    )
}

export default Linker
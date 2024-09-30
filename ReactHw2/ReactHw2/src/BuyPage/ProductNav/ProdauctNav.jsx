import React from "react";
import styles from "./ProductNav.module.scss"

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <span className={styles.navTxt}>Product Details</span>

            <div className={styles.fullInf}>
                <span className={styles.navTxt}>Price</span>
                <span className={styles.navTxt}>shipping</span>
                <span className={styles.navTxt}>subtotal</span>
                <span className={styles.navTxt}>action</span>
            </div>
        </div>
    )
}

export default Navbar
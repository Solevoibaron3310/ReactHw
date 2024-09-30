import React from "react";
import styles from "./BuyDivider.module.scss"
import { Link } from 'react-router-dom';

const Divider = () => {

    return(
        <div className={styles.divWrapper}>
            <div className={styles.linkWrapper}>
                <Link to="/"><span className={styles.unactiveLink}>Home</span></Link>
                <img className={styles.vector} src="./images/left (Stroke).png" alt="" />
                
                <Link to="/buy"><span className={styles.activeLink}>Add To Cart</span></Link>
            </div>

        <div className={styles.textWrapper}>
            <p className={styles.sectionMainTxt}>Please fill in the fields below and click place order to complete your purchase!</p>
            <p className={styles.sectionMainTxt}>Already registered?<span className={styles.secondaryTxt}> Please login here</span></p>
        </div>
        </div>
    )
}

export default Divider
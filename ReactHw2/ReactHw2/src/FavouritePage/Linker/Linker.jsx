import React from "react";
import styles from "./Linker.module.scss"
import { Link } from 'react-router-dom';

const Linker = () => {

    return (
        <div className={styles.LinksWrapper}>
            <Link to="/"><span className={styles.unactive}>Home</span></Link>
            <img src="../images/left (Stroke).png" alt="" />
            <Link to="/FavouritePage"><span className={styles.active}>Wishlist</span></Link>
        </div>

    )
}

export default Linker
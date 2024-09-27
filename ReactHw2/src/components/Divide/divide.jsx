import React from "react";
import styles from "./divide.module.scss"

const DivideSection = () => {

    return (

    <section className={styles.section}>
        <h3>
        Top Brands Deal
        </h3>
        <p className={styles.parag}> Up To <span className={styles.count}>60%</span> off on brands</p>
        <div className={styles.brandWrapper}>
        <img className={styles.brand} src="/images/" alt="" />
        <img className={styles.brand} src="/images/Reactangle 20.png" alt="" />
        <img className={styles.brand} src="/images/Reactangle 20.png" alt="" />
        <img className={styles.brand} src="/images/Reactangle 20.png" alt="" />
        <img className={styles.brand} src="/images/Reactangle 20.png" alt="" />
        </div>
    
    </section>
    )

}

export default DivideSection
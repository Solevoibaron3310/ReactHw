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
        <img className={styles.brand} src="/images/image 7nike.png" alt="" />
        <img className={styles.brand} src="/images/image 18HM.png" alt="" />
        <img className={styles.brand} src="/images/image 19levis.png" alt="" />
        <img className={styles.brand} src="/images/image 20polo.png" alt="" />
        <img className={styles.brand} src="/images/image 21puma.png" alt="" />
        </div>
    
    </section>
    )

}

export default DivideSection
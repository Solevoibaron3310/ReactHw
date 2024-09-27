import React from "react";
import styles from './footer.module.scss';

const Footer = () => {

    return (
<>
    <footer className={styles.footer}>

    <div className={styles.bottomNav}>
        <div className={styles.column}>
        <h2>
        Need Help
        </h2>
        <ul>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>FAQ's</li>
            <li>Career</li>
        </ul>
        </div>
        <div className={styles.column}>
             <h2>
             Company
        </h2>
        <ul>
            <li>About Us</li>
            <li>euphoria Blog</li>
            <li>euphoriastan</li>
            <li>Collaboration</li>
            <li>Media</li>
        </ul>
        </div>
        <div className={styles.column}>
             <h2>
             More Info
        </h2>
        <ul>
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Sitemap</li>
        </ul>
        </div>
        <div className={styles.column}>
             <h2>
             Location
        </h2>
        <ul>
            <li>support@euphoria.in</li>
            <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
            <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
        </ul>
        </div>

    </div>
    <div className={styles.SocMedia}>

    <img className={styles.logo} src="/images/Vectorfaceb.png" alt="" />

    <img className={styles.logo} src="/images/Vectorinst.png" alt="" />

    <img className={styles.logo} src="/images/Vectortwit.png" alt="" />

    <img className={styles.logo} src="/images/in.png" alt="" />

    </div>

    <span className={styles.copyright}>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</span>
    </footer>
</>
    )
}



export default Footer
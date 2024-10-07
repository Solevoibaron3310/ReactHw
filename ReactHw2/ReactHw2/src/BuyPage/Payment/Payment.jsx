import React from "react";
import styles from "./Payment.module.scss";
import { useDispatch } from "react-redux";


const PaymentWrapper = ({items}) => {
    const dispatch = useDispatch();

console.log(dispatch)
const subTotal = items.reduce((total, item) => total + parseInt(item.cost, 10), 0);


    return (
        <div className={styles.paymentSection}>
            <div className={styles.disconts}>
                <h1 className={styles.divTitle}>Discount  Codes</h1>

                <span className={styles.instructions}>Enter your coupon code if you have one</span>
                
                <input className={styles.inpTxt} type="text" name="" id="" />
                
                <button className={styles.applyCoupon}>Apply Coupon</button>
                
                <button className={styles.continue}>Continue Shopping</button>
            
            </div>

            <div className={styles.bill}>
                <div className={styles.fullCost}>
                    <span className={styles.subTotal}>Sub Total</span>
                    <span className={styles.subTotal}>{subTotal}</span>

                    <span className={styles.subTotal}>Shipping</span>
                    <span className={styles.subTotal}>FREE</span>




                    <span className={styles.grandTotal}>Grand Total</span>
                    <span className={styles.grandTotal}>{subTotal}</span>
                    
                </div>

                <button className={styles.checkout}>Proceed To Checkout</button>
            </div>
        </div>
    )
}

export default PaymentWrapper
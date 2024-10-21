import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Linker from './Linker/CheckoutLinker.jsx';
import CheckoutForm from "./Form/Form.jsx";
import { useSelector } from "react-redux";
import styles from "./CheckoutPage.module.scss";
import { CheckoutCard } from "./CheckoutCard/CheckoutCard.jsx";

const CheckoutPage = () => {
    const cart = useSelector((state) => state.cart.cart); 
    console.log(cart)

    const handleClick1 = () => alert('Button 1 clicked');
    const handleClick2 = () => alert('Button 2 clicked');
    const handleClick3 = () => alert('Button 3 clicked');
    const handleClick4 = () => alert('Button 4 clicked');
    const handleClick5 = () => alert('Button 5 clicked');
  
    const buttons = [
      { label: 'Shop', onClick: handleClick1, type: 'button' },
      { label: 'Men', onClick: handleClick2, type: 'button' },
      { label: 'Women', onClick: handleClick3, type: 'button' },
      { label: 'Combos', onClick: handleClick4, type: 'button' },
      { label: 'Joggers', onClick: handleClick5, type: 'button' },
    ];
    const totalCost = cart.reduce((total, item) => 
        parseInt(total, 10) + parseInt(item.cost, 10), 0);
    

    return (
        <>
            <Header 
                logoSrc="/images/Logo (1).png"
                logoAlt="Check my img"
                buttons={buttons}
            />
            <Linker/>
            <h1 className={styles.pageLabel}>Check Out</h1>

                <CheckoutForm/>

                <div className={styles.buyContainer}>
                    <h1 className={styles.label}>Order Summary</h1>
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <CheckoutCard 
                            key={item.id} 
                            item={item} 
                            />
                        ))
                        
                    )  : (
                        <p>Корзина пуста.</p>
                    )}
                    <p className={styles.total}>Total: {totalCost}</p>
                </div>

            <Footer/>
        </>
    )
}

export default CheckoutPage
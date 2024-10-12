import React, { useContext, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BuyCard from './BuyCard/BuyCard.jsx';
import Divider from "./BuyDivider/BuyDivider.jsx";
import Navbar from "./ProductNav/ProdauctNav.jsx";
import PaymentWrapper from "./Payment/Payment.jsx";
import  styles from "./BuyPage.module.scss";
import { useSelector } from "react-redux";



const BuyPage = () => {
    const cart = useSelector((state) => state.cart.cart); // Правильное получение корзины из состояния Redux
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

    return (
        <>
            <Header 
                logoSrc="/images/Logo (1).png"
                logoAlt="Check my img"
                buttons={buttons}
            />

        <Divider/>
        
        <Navbar/>
            <div className={styles.buyPage}>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <BuyCard 
                        key={item.id} 
                        item={item} 
                        
                        // removeFromBuy={removeFromBuy}
                        />
                    ))
                ) : (
                    <p>Корзина пуста.</p>
                )}
            </div>

            <div className={styles.PaymentSection}>
                {cart.length > 0 ? (
                    
                        <PaymentWrapper
                        items={cart}
                        />
                   
                ) : (
                    <p>ВАМ НЕЗАЧТО ПАЛТИТЬ</p>
                )
                
                }
            </div>
            <Footer />
        </>
    );
};

export default BuyPage;

import React, { useContext } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { FavoriteContext } from '../FavContext/FavContext.jsx';
import BuyCard from './BuyCard/BuyCard.jsx';
import { BuyContext } from '../BuyContext/BuyContext.jsx';
import Divider from "./BuyDivider/BuyDivider.jsx";
import Navbar from "./ProductNav/ProdauctNav.jsx";
import PaymentWrapper from "./Payment/Payment.jsx";
import  styles from "./BuyPage.module.scss"


const BuyPage = () => {
    const { favorites } = useContext(FavoriteContext);
    const { buy, addToBuy, removeFromBuy } = useContext(BuyContext);

 
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
                {buy.length > 0 ? (
                    buy.map((item) => (
                        <BuyCard 
                        key={item.id} 
                        item={item} 
                        addToBuy={addToBuy} 
                        removeFromBuy={removeFromBuy}
                        />
                    ))
                ) : (
                    <p>Корзина пуста.</p>
                )}
            </div>

            <div className={styles.PaymentSection}>
                {buy.length > 0 ? (
                    
                        <PaymentWrapper
                        items={buy}
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

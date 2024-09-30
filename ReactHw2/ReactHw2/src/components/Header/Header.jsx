import React from "react";
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Logo from "./Logo/Logo";
import HeaderButton from "./HeaderButton/HeaderButton";
import FavBtn from "./HeaderFav/HeaderFav.jsx";
import Card from "./ShopCard/ShopCard.jsx";

const Header = ({ logoSrc, logoAlt, buttons }) => {
  return (
    <header className={styles.Header}>
       
      <Logo 
        logoSrc={logoSrc} 
        alt={logoAlt}
      />
      <nav className={styles.nav}>
        {buttons.map((button, index) => (
          <HeaderButton
            key={index}
            label={button.label}
            onClick={button.onClick}
            type={button.type}
          />
        ))}
        <FavBtn src="images/heart.png" />
        <Card src="images/shopping cart.png"/>
      </nav>
    </header>
  );
}

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired, 
  logoAlt: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired, 
      type: PropTypes.string.isRequired,
    })
  ).isRequired, 
};

export default Header;

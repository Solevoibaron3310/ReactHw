import React from "react";
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Logo from "./Logo/Logo";
import HeaderButton from "./HeaderButton/HeaderButton";

const Header = ({logoSrc, logoAlt, buttons}) => {
   

    return (
    <header className={styles.Header}>
        <Logo 
        src="/images/Rectangle 20.png"
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
        
        </nav>
    </header>
    )
}

Header.propTypes = {
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired, 
            type: PropTypes.string.isRequired,
        })
    ).isRequired, 
};

export default Header
import React, { useContext } from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { FavoriteContext } from '../FavContext/FavContext.jsx'; 
import { BuyContext } from '../BuyContext/BuyContext.jsx'; 
import FavoriteList from './FavouriteList/FavouriteList.jsx';
import Linker from './Linker/Linker.jsx';

const FavoriteListPage = () => {
  const { favorites, addToFavorites } = useContext(FavoriteContext);
  const { addToBuy } = useContext(BuyContext);

  console.log(favorites);

  const buttons = [
    { label: 'Shop', onClick: () => alert('Shop clicked'), type: 'button' },
    { label: 'Men', onClick: () => alert('Men clicked'), type: 'button' },
    { label: 'Women', onClick: () => alert('Women clicked'), type: 'button' },
    { label: 'Combos', onClick: () => alert('Combos clicked'), type: 'button' },
    { label: 'Joggers', onClick: () => alert('Joggers clicked'), type: 'button' },
  ];

  return (
    <>
      <Header 
        logoSrc="/images/Logo (1).png"
        logoAlt="Check my img"
        buttons={buttons}
      />

      <Linker/>

      <FavoriteList label="Wishlist" addToBuy={addToBuy} />
      <Footer/>
    </>
  );
};

export default FavoriteListPage;

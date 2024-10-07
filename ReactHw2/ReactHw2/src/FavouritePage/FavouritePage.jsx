import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx'; 
// import { BuyContext } from '../BuyContext/BuyContext.jsx'; 
import FavoriteList from './FavouriteList/FavouriteList.jsx';
import Linker from './Linker/Linker.jsx';
import { useSelector } from 'react-redux';



const FavoriteListPage = () => {
  // const { addToBuy } = useContext(BuyContext);

 
    const favourites = useSelector((state) => state.favourites.favourites);
    console.log(favourites)




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

      <FavoriteList label="Wishlist" />
      <Footer/>
    </>
  );
};

export default FavoriteListPage;

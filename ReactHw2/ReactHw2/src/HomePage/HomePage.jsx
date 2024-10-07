import React, { useEffect } from "react";
import Header from '../components/Header/Header.jsx';
import MenCards from '../components/Men/MenCards/MenCards.jsx';
import Footer from '../components/Footer/Footer.jsx';
import DivideSection from '../components/Divide/divide.jsx';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchProducts } from '../store/slices/products.slice.js';

const HomePage = () => {
  const dispatch = useDispatch(); // Корректный вызов useDispatch
  const { products, status, error } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); // Загружаем товары с сервера
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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

      <MenCards label="Category for Men" />

      <DivideSection />

      <Footer />
    </>
  );
};

export default HomePage;

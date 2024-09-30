import './App.module.scss';
import { Route, Routes } from 'react-router';
import FavoriteListPage from './FavouritePage/FavouritePage.jsx';
import HomePage from './HomePage/HomePage.jsx';
import BuyPage from './BuyPage/BuyPage.jsx';

function App() {
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
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='FavouritePage' element={<FavoriteListPage/>}/>
        <Route path="buy" element={<BuyPage />} />
      </Routes>
      
    </>
  );
}

export default App;

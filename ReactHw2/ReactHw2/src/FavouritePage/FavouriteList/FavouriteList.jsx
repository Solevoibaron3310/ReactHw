// import React, { useContext } from 'react';
// import { FavoriteContext } from '../../FavContext/FavContext.jsx';
// import FavoriteCard from './FavouriteCard/FavouriteCard.jsx';
// import PropTypes from 'prop-types';
// import styles from './FavouriteList.module.scss';
// import { BuyContext } from '../../BuyContext/BuyContext.jsx'; // Импортируйте BuyContext

// const FavoriteList = ({ label }) => {
//     const { favorites, addToFavorites } = useContext(FavoriteContext);
//     const { addToBuy } = useContext(BuyContext); // Получите функцию addToBuy из BuyContext

//     return (
//         <div className={"favorite-list"}>
//             <h2 className={styles.ListLabel}>{label}</h2>
//             {favorites.length > 0 ? (
//                 favorites.map((item) => (
//                     <FavoriteCard 
//                         key={item.id} 
//                         item={item} 
//                         addToFavorites={addToFavorites} 
//                         addToBuy={addToBuy} // Передайте addToBuy
//                     />
//                 ))
//             ) : (
//                 <p>Список избранных пуст.</p>
//             )}
//         </div>
//     );
// };

// FavoriteList.propTypes = {
//     label: PropTypes.string.isRequired
// };

// export default FavoriteList;


import React, { useContext } from 'react';
import { FavoriteContext } from '../../FavContext/FavContext.jsx'; 
import FavoriteCard from './FavouriteCard/FavouriteCard.jsx'; 
import PropTypes from 'prop-types';
import styles from './FavouriteList.module.scss';

const FavoriteList = ({ label, addToBuy }) => { // Добавляем addToBuy как пропс
  const { favorites, addToFavorites } = useContext(FavoriteContext);

  return (
    <div className={styles.favoriteList}>
      <h2 className={styles.ListLabel}>{label}</h2>
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <FavoriteCard 
            key={item.id} 
            item={item} 
            addToFavorites={addToFavorites} 
            addToBuy={addToBuy} // Передаем функцию в FavoriteCard
          />
        ))
      ) : (
        <p>Список избранных пуст.</p>
      )}
    </div>
  );
};

FavoriteList.propTypes = {
  label: PropTypes.string.isRequired,
  addToBuy: PropTypes.func.isRequired // Убедитесь, что addToBuy передается как пропс
};

export default FavoriteList;

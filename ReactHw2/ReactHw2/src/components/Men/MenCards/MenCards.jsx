// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import styles from "./MenCards.module.scss";
// import Card from "./MenCard/MenCard.jsx";
// // import { FavoriteContext } from "../../../FavContext/FavContext.jsx";
// import { useSelector, useDispatch } from "react-redux";
// import { addToFavourites } from "../../../store/slices/favourite.slice.js";

// const MenCards = ({ label }) => {
//   const [cards, setCards] = useState([]);
//   const { addToFavorites } = useContext(FavoriteContext);

//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);

//   const handleFavClick = (item) => {
//     dispatch(addToFavourites(item.id)); // Добавляем в избранное через Redux
//   };
  
  
//   useEffect(() => {
//     fetch('/data.json')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setCards(data);
//         console.log(data);
//       })
//       .catch((error) => console.error('Fetch error:', error));
//   }, []);

//   return (
//     <>
//       <h1 className={styles.mainHeading}>{label}</h1>
//       <div className={styles["Cards-Wrapper"]}>
//         {products.map((card) => (
//           <Card
//             key={card.id}
//             img={card.img}
//             name={card.name}
//             brand={card.brand}
//             cost={card.cost}
//             srcFav={card.addToFav}
//             item={card}
//             onFavClick={() => handleFavClick(card)} // Используем Redux для добавления в избранное
//             inCard={card.inCard}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// MenCards.propTypes = {
//   label: PropTypes.string,
// };

// export default MenCards;


// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import styles from "./MenCards.module.scss";
// import Card from "./MenCard/MenCard.jsx";
// import { useDispatch, useSelector } from 'react-redux';
// import { addToFavourites } from '../../../store/slices/favourite.slice.js'; // Импортируйте ваш action creator

// const MenCards = ({ label }) => {
//   const dispatch = useDispatch();
//   const [cards, setCards] = React.useState([]);

//   useEffect(() => {
//     fetch('/data.json')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setCards(data);
//       })
//       .catch((error) => console.error('Fetch error:', error));
//   }, []);

//   const handleFavClick = (item) => {
//     dispatch(addToFavourites(item)); // Используйте action creator
//   };

//   return (
//     <>
//       <h1 className={styles.mainHeading}>{label}</h1>
//       <div className={styles["Cards-Wrapper"]}>
//         {cards.map((card) => (
//           <Card
//             key={card.id}
//             img={card.img}
//             name={card.name}
//             brand={card.brand}
//             cost={card.cost}
//             onFavClick={() => handleFavClick(card)} // Передаем карточку в обработчик
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// MenCards.propTypes = {
//   label: PropTypes.string,
// };

// export default MenCards;


import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MenCards.module.scss";
import Card from "./MenCard/MenCard.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites } from '../../../store/slices/favourite.slice.js'; // Импортируйте ваш action creator

const MenCards = ({ label }) => {
  const dispatch = useDispatch();
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const handleFavClick = (item) => {
    dispatch(addToFavourites(item)); // Используйте action creator
    const updatedFavourites = [...favourites]; // получите текущее состояние избранного
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  

  return (
    <>
      <h1 className={styles.mainHeading}>{label}</h1>
      <div className={styles["Cards-Wrapper"]}>
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            name={card.name}
            brand={card.brand}
            cost={card.cost}
            onFavClick={() => handleFavClick(card)} // Передаем карточку в обработчик
          />
        ))}
      </div>
    </>
  );
};

MenCards.propTypes = {
  label: PropTypes.string,
};

export default MenCards;

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./MenCards.module.scss";
import Card from "./MenCard/MenCard.jsx";
import { FavoriteContext } from "../../../FavContext/FavContext.jsx";

const MenCards = ({ label }) => {
  const [cards, setCards] = useState([]);
  const { addToFavorites } = useContext(FavoriteContext);

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
        console.log(data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

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
            srcFav={card.addToFav}  
            item={card}  
            onFavClick={addToFavorites} 
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

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MenCards.module.scss";
import Card from "./MenCard/MenCard.jsx";


const MenCards = () => {
  const [cards, setCards] = useState([]);
 
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error('Fetch error:', error)); 
  }, []);

  return (
    <>
      <div className={styles["Cards-Wrapper"]}> 
      {cards.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            name={card.name}
            description={card.description}
            srcFav={card.addToFav}  
          />
        ))}
      </div>
    </>
  );
};

MenCards.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
   srcFav: PropTypes.string
};

export default MenCards;

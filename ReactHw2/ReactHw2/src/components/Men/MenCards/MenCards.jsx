import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MenCards.module.scss";
import Card from "./MenCard/MenCard.jsx";
import { useDispatch } from 'react-redux';
import { addToFavourites } from '../../../store/slices/favourite.slice.js';
import { useView } from "../../../ViewContext/ViewContext.jsx";

const MenCards = ({ label, customClass }) => {
  const dispatch = useDispatch();
  const { view } = useView(); 
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
    dispatch(addToFavourites(item)); 
  };

  return (
    <>
      <h1>{label}</h1>
      <div className={`${view === 'card' ? styles.CardsWrapper : styles.TableWrapper} ${customClass}`}>
        {view === 'card' ? (
          cards.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              name={card.name}
              brand={card.brand}
              cost={card.cost}
              onFavClick={() => handleFavClick(card)} 
            />
          ))
        ) : (
          <table>
            <thead>
              <tr>
                <th>Назва</th>
                <th>Бренд</th>
                <th>Ціна</th>
                <th>Дія</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card.id}>
                  <td>{card.name}</td>
                  <td>{card.brand}</td>
                  <td>{card.cost} грн</td>
                  <td>
                    <button onClick={() => handleFavClick(card)}>Додати в обране</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

MenCards.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
};

export default MenCards;

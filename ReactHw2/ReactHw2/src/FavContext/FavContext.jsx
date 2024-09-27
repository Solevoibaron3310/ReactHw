import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const addToFavorites = (item) => {
    setFavorites((prevFavs) => {
      if (prevFavs.find(fav => fav.id === item.id)) {
        return prevFavs.filter(fav => fav.id !== item.id); 
      } else {
        return [...prevFavs, { ...item, isFav: true }]; 
      }
    });
    openModal(); 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, isModalOpen, closeModal }}>
      {children}
      {isModalOpen && <Modal closeModal={closeModal} />} {/* Условный рендеринг модального окна */}
      {isModalOpen && <div className="modal-overlay" onClick={closeModal} />} {/* Затемнённый фон */}
    </FavoriteContext.Provider>
  );
};


const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <h2>Модальное окно</h2>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );
};

import React, { createContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const addToFavorites = (item) => {
    setFavorites((prevFavs) => {
      const updatedFavorites = prevFavs.find(fav => fav.id === item.id)
        ? prevFavs.filter(fav => fav.id !== item.id) 
        : [...prevFavs, { ...item, isFav: true, inCard: false }]; 

      
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      return updatedFavorites; 
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
      {isModalOpen && <Modal closeModal={closeModal} />} 
      {isModalOpen && <div className="modal-overlay" onClick={closeModal} />} 
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

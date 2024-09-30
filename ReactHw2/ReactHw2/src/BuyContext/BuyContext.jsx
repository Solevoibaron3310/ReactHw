import React, { createContext, useState } from 'react';

export const BuyContext = createContext();

export const BuyProvider = ({ children }) => {
    const [buy, setBuy] = useState(() => {
        const savedBuy = localStorage.getItem('buy');
        return savedBuy ? JSON.parse(savedBuy) : [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToBuy = (item) => {
        setBuy((prevBuy) => {
            // Ищем элемент в корзине
            const itemInCart = prevBuy.find(buyItem => buyItem.id === item.id);
    
            // Если элемент уже в корзине, обновляем его, иначе добавляем новый
            if (itemInCart) {
                // Создаем новый массив с обновлённым элементом
                const updatedBuy = prevBuy.map(buyItem =>
                    buyItem.id === item.id ? { ...buyItem, inCard: true } : buyItem
                );
                localStorage.setItem('buy', JSON.stringify(updatedBuy));
                return updatedBuy;
            } else {
                // Добавляем новый элемент с inCard: true
                const newBuy = [...prevBuy, { ...item, inCard: true }];
                localStorage.setItem('buy', JSON.stringify(newBuy));
                return newBuy;
            }
        });
    };

    const openModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
      };
    
    const removeFromBuy = (id) => {
        setBuy((prevBuy) => {
            const updatedBuy = prevBuy.filter(item => item.id !== id);
            localStorage.setItem('buy', JSON.stringify(updatedBuy));
            return updatedBuy;
        });
    };
    
    

    return (
<BuyContext.Provider value={{ buy, addToBuy,  removeFromBuy, isModalOpen, closeModal}}>
    {children}
    {isModalOpen && <Modal closeModal={closeModal} />} 
    {isModalOpen && <div className="modal-overlay" onClick={closeModal} />}
</BuyContext.Provider>
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
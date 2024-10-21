import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import BuyCard from "./BuyCard.jsx";
import { removeFromCart } from '../../store/slices/shopCart.slice'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(), // Мокаем useDispatch
  }));
  
  jest.mock('../../store/slices/shopCart.slice', () => ({
    removeFromCart: jest.fn(), // Мокаем removeFromCart action
  }));

describe('BuyCard Component', () => {
    it('should call removeFromCart when delete button is clicked', () => {
      const item = { id: 1, name: 'Test Item', img: '/test.jpg', color: 'blue', cost: '100' };
      const mockDispatch = jest.fn();
      useDispatch.mockReturnValue(mockDispatch); // Замоканное значение для dispatch
  
      render(<BuyCard item={item} />);
  
      const deleteButton = screen.getByText('X'); // Ищем кнопку удаления
      fireEvent.click(deleteButton); // Симулируем клик
  
      expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(item.id)); // Проверяем, что вызван dispatch с правильным id
      expect(mockDispatch).toHaveBeenCalledTimes(1); // Проверяем, что dispatch был вызван один раз
    });
  });
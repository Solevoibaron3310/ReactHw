import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import FavoriteCard from "./FavouriteCard.jsx";


jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

describe('FavouriteCards Component', () => {
    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'),
        useDispatch: jest.fn(), 
      }));
      
      const mockStore = configureStore([]);
      
      test('Remove from List button works', () => {
        const item = { name: 'Test Item' };
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch); 
      
        const store = mockStore({}); 
      
        render(
          <Provider store={store}>
            <FavouriteCard item={item} addToFavorites={() => {}} addToBuy={() => {}} />
          </Provider>
        );
      
        const removeFromListButton = screen.getByText('Remove from List');
        fireEvent.click(removeFromListButton);
      
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        
      });
    });
    













})
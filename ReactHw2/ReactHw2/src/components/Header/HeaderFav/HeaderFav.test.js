import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderFav from './HeaderFav.jsx';


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('HeaderFav Component', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

 
  it('should render the favourites count correctly', () => {
    const mockFavourites = [{ id: 1 }, { id: 2 }]; 


    useSelector.mockReturnValue(mockFavourites);

    render(
      <Router> {}
        <HeaderFav />
      </Router>
    );

    
    const counterElement = screen.getByText(mockFavourites.length.toString());
    expect(counterElement).toBeInTheDocument();
  });

 
  it('should have a link to the FavouritePage', () => {
    useSelector.mockReturnValue([]); 

    render(
      <Router>
        <HeaderFav />
      </Router>
    );

   
    const linkElement = screen.getByRole('link', { name: '' });
    expect(linkElement).toHaveAttribute('href', '/FavouritePage');
  });
});

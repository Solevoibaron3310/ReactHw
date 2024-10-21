import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './ShopCard.jsx';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}))

describe('Header ShopCard Component', () => {
    beforeEach(() => {
        useSelector.mockClear();
    });

    it('should render the shop count coreectly', () => {
        const mockShopCard = [{ id: 1}, { id: 2 }];

        useSelector.mockReturnValue(mockShopCard)

        render(
            <Router>
                <Card />
            </Router>
        )

        const counterEl = screen.getByText(mockShopCard.length.toString())
        expect(counterEl).toBeInTheDocument();





    })


    it('should have a link to Shopping Card', () => {
        useSelector.mockReturnValue([]);

        render(

            <Router>
                <Card/>
            </Router>
        )

        const linkEl = screen.getByRole('link', {name: 'BuyCart'});
        expect(linkEl).toHaveAttribute('href', '/buy')
    })


})
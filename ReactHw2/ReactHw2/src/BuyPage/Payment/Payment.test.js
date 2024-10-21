import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'; 
import PaymentWrapper from "./Payment.jsx";

const mockStore = configureMockStore([]);

describe('PaymentWrapper Component', () => {
  it('should render link to path /checkout', () => {
    const items = [
      { id: 1, name: 'Test Item 1', cost: '100' },
      { id: 2, name: 'Test Item 2', cost: '150' },
    ];

   
    const store = mockStore({
      cart: [], 
    });

    render(
      <Provider store={store}>
        <Router>
          <PaymentWrapper items={items} />
        </Router>
      </Provider>
    );

    const checkoutLink = screen.getByRole('link', { name: /Proceed To Checkout/i });
    expect(checkoutLink).toHaveAttribute('href', '/checkout');
  });
});

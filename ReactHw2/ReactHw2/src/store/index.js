// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/products.slice';
import favouriteReducer, { addToFavourites } from './slices/favourite.slice';
import cartReducer, { addToCart } from './slices/shopCart.slice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouriteReducer,
    cart: cartReducer
  },
});

const savedFavourites = localStorage.getItem('favourites');
if (savedFavourites) {
  store.dispatch(addToFavourites(JSON.parse(savedFavourites)));
}

const savedCart = localStorage.getItem('cart')

if (savedCart) {
  store.dispatch(addToCart(JSON.parse(savedCart)))
}

export default store;

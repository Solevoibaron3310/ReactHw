import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: JSON.parse(localStorage.getItem('favourites')) || [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const itemIndex = state.favourites.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        
        state.favourites = state.favourites.filter(item => item.id !== action.payload.id);
      } else {
        
        state.favourites.push({ ...action.payload, isFav: true });
      }

      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
});

export const { addToFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;

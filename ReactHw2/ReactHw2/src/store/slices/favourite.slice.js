import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: JSON.parse(localStorage.getItem('favourites')) || [], // Загружаем избранное из LocalStorage
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const itemIndex = state.favourites.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // Если элемент уже есть, удаляем его
        state.favourites = state.favourites.filter(item => item.id !== action.payload.id);
      } else {
        // Если элемента нет, добавляем его в избранное
        state.favourites.push({ ...action.payload, isFav: true });
      }

      // Сохраняем обновленный массив в LocalStorage
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
});

// Экспортируем действия
export const { addToFavourites } = favouriteSlice.actions;

// Экспортируем редюсер
export default favouriteSlice.reducer;

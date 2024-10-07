import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Загружаем корзину из LocalStorage
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);


            if (itemIndex >= 0) {
                // Если элемент уже есть в корзине, удаляем его
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
            } else {
                // Если элемента нет, добавляем его в корзину
                state.cart.push({...action.payload, inCard: true});
            }

            // Обновляем LocalStorage после изменения корзины
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            // Удаление элемента из корзины по ID
            state.cart = state.cart.filter(item => item.id !== action.payload); // Используем action.payload напрямую как ID

            // Обновляем LocalStorage после удаления
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

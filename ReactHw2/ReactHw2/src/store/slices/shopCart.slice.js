import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);


            if (itemIndex >= 0) {
                
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
            } else {
                
                state.cart.push({...action.payload, inCard: true});
            }

           
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            
            state.cart = state.cart.filter(item => item.id !== action.payload); 

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeAllFromCart: (state, action) => {
            state.cart = []
            console.log("Bought Items:", state.cart);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
});

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;

export default cartSlice.reducer;

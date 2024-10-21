import cartReducer, { addToCart, removeFromCart, removeAllFromCart } from './shopCart.slice.js';

describe('cartSlice reducer', () => {
    const initialState = {
        cart: [],
    };

    beforeEach(() => {
        localStorage.clear();
    });

    it('should return the initial state', () => {
        const newState = cartReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should handle addToCart action', () => {
        const item = { id: 1, name: 'Test Item', cost: 100 };
        const action = addToCart(item);
        
        const newState = cartReducer(initialState, action);

        expect(newState.cart).toEqual([{ ...item, inCard: true }]);
        expect(localStorage.getItem('cart')).toEqual(JSON.stringify(newState.cart));
    });

    it('should handle addToCart action when item already exists', () => {
        const existingItem = { id: 1, name: 'Test Item', cost: 100 };
        const initialStateWithItem = { cart: [existingItem] };
        const action = addToCart(existingItem);
        
        const newState = cartReducer(initialStateWithItem, action);

        expect(newState.cart).toEqual([]); 
        expect(localStorage.getItem('cart')).toEqual(JSON.stringify(newState.cart));
    });

    it('should handle removeFromCart action', () => {
        const item1 = { id: 1, name: 'Test Item 1', cost: 100 };
        const item2 = { id: 2, name: 'Test Item 2', cost: 150 };
        const initialStateWithItems = { cart: [item1, item2] };
        const action = removeFromCart(item1.id);

        const newState = cartReducer(initialStateWithItems, action);

        expect(newState.cart).toEqual([item2]); 
        expect(localStorage.getItem('cart')).toEqual(JSON.stringify(newState.cart));
    });

    it('should handle removeAllFromCart action', () => {
        const item1 = { id: 1, name: 'Test Item 1', cost: 100 };
        const item2 = { id: 2, name: 'Test Item 2', cost: 150 };
        const initialStateWithItems = { cart: [item1, item2] };
        const action = removeAllFromCart();

        const newState = cartReducer(initialStateWithItems, action);

        expect(newState.cart).toEqual([]); 
        expect(localStorage.getItem('cart')).toEqual(JSON.stringify(newState.cart));
    });
});

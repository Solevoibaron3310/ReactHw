import favouriteReducer, { addToFavourites } from './favourite.slice.js';

describe('favouriteSlice reducer', () => {
  const initialState = {
    favourites: [],
  };

  beforeEach(() => {
 
    localStorage.clear();
  });

  it('should return the initial state', () => {
    const newState = favouriteReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle addToFavourites action and add item', () => {
    const item = { id: 1, name: 'Test Item' };
    const action = addToFavourites(item);
    
    const newState = favouriteReducer(initialState, action);

    expect(newState.favourites).toEqual([{ ...item, isFav: true }]);
    expect(localStorage.getItem('favourites')).toEqual(JSON.stringify(newState.favourites));
  });

  it('should handle addToFavourites action and remove existing item', () => {
    const existingItem = { id: 1, name: 'Test Item', isFav: true };
    const initialStateWithItem = { favourites: [existingItem] };
    const action = addToFavourites(existingItem);
    
    const newState = favouriteReducer(initialStateWithItem, action);

    expect(newState.favourites).toEqual([]); 
    expect(localStorage.getItem('favourites')).toEqual(JSON.stringify(newState.favourites));
  });
});

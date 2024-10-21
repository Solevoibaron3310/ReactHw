import productsReducer, { fetchProducts } from './productsSlice';

describe('productsSlice reducer', () => {
  const initialState = {
    products: [],
    status: 'idle',
    error: null,
  };

  it('should return the initial state', () => {
    const newState = productsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle fetchProducts.pending', () => {
    const action = { type: fetchProducts.pending.type };
    const newState = productsReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      status: 'loading',
    });
  });

  it('should handle fetchProducts.fulfilled', () => {
    const mockProducts = [{ id: 1, name: 'Test Product' }];
    const action = { type: fetchProducts.fulfilled.type, payload: mockProducts };
    const newState = productsReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      status: 'succeeded',
      products: mockProducts,
    });
  });

  it('should handle fetchProducts.rejected', () => {
    const action = { type: fetchProducts.rejected.type, error: { message: 'Failed to fetch' } };
    const newState = productsReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      status: 'failed',
      error: 'Failed to fetch',
    });
  });
});

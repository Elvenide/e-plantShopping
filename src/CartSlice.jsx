import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingQuantity = state.items.find(
        (item) => item.name === action.payload.name
      )?.quantity ?? 0;
      state.items.push({
        ...action.payload,
        quantity: existingQuantity + 1,
      });
    },
    removeItem: (state, action) => {
      state.items.splice(
        state.items.findIndex((item) => item.name === action.payload.name),
        1
      );
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item)
        item.quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

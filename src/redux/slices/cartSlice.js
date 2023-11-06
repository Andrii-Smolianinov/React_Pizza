import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCart: [],
  totalPrice: 0,
};

export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToItemCart(state, action) {
      state.itemsCart.push(action.payload);
    },
    removeFromItemCart(state, action) {
      state.itemsCart = state.itemsCart.filter((obj) => obj.id !== action.payload)
    },
    clearItemsCart(state, action) {
      state.itemsCart = [];
    },
  },
});

export const { addToItemCart, removeFromItemCart, clearItemsCart } = cartSlise.actions;

export default cartSlise.reducer;

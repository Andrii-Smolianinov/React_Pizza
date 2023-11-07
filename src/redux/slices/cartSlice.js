import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCart: [],
  totalPrice: 0,
};

export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.itemsCart.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.itemsCart = state.itemsCart.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearCart(state) {
      state.itemsCart = [];
    },
    setTotalPrice(state, action) {
      state.totalPrice += Number(action.payload);
    },
    clearTotalPrice(state) {
      state.totalPrice = Number(0);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  setTotalPrice,
  clearTotalPrice,
} = cartSlise.actions;

export default cartSlise.reducer;

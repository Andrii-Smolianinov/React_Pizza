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
      const findItem = state.itemsCart.find((item) => item.price === action.payload.price);
      
      if (findItem) {
        findItem.count++;
        findItem.itemPrice += action.payload.price 
      } else {
        state.itemsCart.push({ ...action.payload, count: 1 });
      }
    },
    // addItemToCart(state, action) {
    //   const findItem = state.itemsCart.find(
    //     (obj) => obj.id === action.payload.id
    //   );
    //   if (findItem) {
    //     findItem.count++;
    //   } else {
    //     state.itemsCart.push({...action.payload, count: 1});
    //   }
    // },
    removeItemFromCart(state, action) {
      state.itemsCart = state.itemsCart.filter((_, i) => i !== action.payload);
    },
    clearCart(state) {
      state.itemsCart = [];
    },
    setIncrementTotalPrice(state, action) {
      
      state.totalPrice += Number(action.payload);
    },
    setDecrementTotalPrice(state, action) {
      
      state.totalPrice -= Number(action.payload);
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
  setIncrementTotalPrice,
  setDecrementTotalPrice,
  clearTotalPrice,
} = cartSlise.actions;

export default cartSlise.reducer;

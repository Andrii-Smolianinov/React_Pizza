import { createSlice } from "@reduxjs/toolkit";

type ItemsCart = {
  id: string;
  images: string;
  tittle: string;
  count: number;
  price: number;
  itemPrice: number;
  selectDiameter: string;
};

interface CartSliceState {
  itemsCart: ItemsCart[];
  totalPrice: number;
}

const initialState: CartSliceState = {
  itemsCart: [],
  totalPrice: 0,
};

export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const findItem = state.itemsCart.find(
        (item) => item.price === action.payload.price
      );
      if (findItem) {
        findItem.count++;
        findItem.itemPrice += action.payload.price;
      } else {
        state.itemsCart.push({ ...action.payload, count: 1 });
      }
    },
    setIncrementCount(state, action) {
      const findItem = state.itemsCart.find((_, i) => i === action.payload);
      if (findItem) {
        findItem.count++;
        findItem.itemPrice = findItem.price * findItem.count;

        state.totalPrice = state.itemsCart.reduce((sum, item) => {
          return item.itemPrice + sum;
        }, 0);
      }
    },
    setDecrementCount(state, action) {
      const findItem = state.itemsCart.find((_, i) => i === action.payload);
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
          findItem.itemPrice = findItem.price * findItem.count;
        } else {
          findItem.count = 1;
          findItem.itemPrice = findItem.price;
        }
        state.totalPrice = state.itemsCart.reduce((sum, item) => {
          return item.itemPrice + sum;
        }, 0);
      }
    },
    setTotalPrice(state, action) {
      state.totalPrice += Number(action.payload);
    },
    removeItemFromCart(state, action) {
      state.itemsCart = state.itemsCart.filter((_, i) => i !== action.payload);
      state.totalPrice = state.itemsCart.reduce((sum, item) => {
        return item.itemPrice + sum;
      }, 0);
    },
    clearCart(state) {
      state.itemsCart = [];
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
  setIncrementCount,
  setDecrementCount,
} = cartSlise.actions;

export const selectCart = (state) => state.cart;

export default cartSlise.reducer;

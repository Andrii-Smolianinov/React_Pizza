import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzasSlice = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { category, sortBy } = params;
    const { data } = await axios.get(
      `https://64fad951cb9c00518f7a461b.mockapi.io/items?${category}&${sortBy}`
    );
    return data;
  }
);

export const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setIncrementLikes(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (!findItem.isClickLike) {
        findItem.isClickLike = true;
        findItem.likes++;
      } else {
        findItem.isClickLike = false;
        findItem.likes--;
      }
    },
    setIsClickOrder(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (!findItem.isClickOrder) {
        findItem.isClickOrder = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasSlice.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })

      .addCase(fetchPizzasSlice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.items.map((item) => item.isClickLike === false);
        state.items.map((item) => item.isClickOrder === false);
        state.status = "success";
      })

      .addCase(fetchPizzasSlice.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const selectPizzas = (state) => state.pizzas;

export const { setIncrementLikes, setIsClickOrder } = pizzasSlice.actions;

export default pizzasSlice.reducer;

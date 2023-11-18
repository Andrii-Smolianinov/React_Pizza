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
  reducers: {},
  extraReducers: {
    [fetchPizzasSlice.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzasSlice.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzasSlice.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectPizzas = state => state.pizzas;

export default pizzasSlice.reducer;

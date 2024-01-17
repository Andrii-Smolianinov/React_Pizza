import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzasSlice = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { category, sortBy } = params;
    const { data } = await axios.get(
      `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items?${category}&${sortBy}`
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasSlice.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })

      .addCase(fetchPizzasSlice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })

      .addCase(fetchPizzasSlice.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const selectPizzas = (state) => state.pizzas;

export default pizzasSlice.reducer;

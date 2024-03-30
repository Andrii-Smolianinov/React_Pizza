import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchPizzasSlice = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params: Record<string, string>) => {
    const { category, sortBy } = params;
    const { data } = await axios.get(
      `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items?${category}&${sortBy}`
    );
    return data;
  }
);

type Items = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  category: number[];
};

interface PizzasSliceState {
  items: Items[];
  status: "loading" | "success" | "error";
}

export const initialState: PizzasSliceState = {
  items: [],
  status: "loading",
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

export const selectPizzas = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;

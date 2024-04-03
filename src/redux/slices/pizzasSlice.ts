import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Data = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  category: number[];
  rating: number;
  description: string;
};

export const fetchPizzasSlice = createAsyncThunk<
  Data[],
  Record<string, string>
>("pizzas/fetchPizzasStatus", async (params) => {
  const { category, sortBy } = params;
  const { data } = await axios.get<Data[]>(
    `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items?${category}&${sortBy}`
  );
  return data;
});

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

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasSlice.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })

      .addCase(
        fetchPizzasSlice.fulfilled,
        (state, action: PayloadAction<Data[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }
      )

      .addCase(fetchPizzasSlice.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Data, PizzasSliceState, Status } from "./pizzasTypes";
import { fetchPizzasSlice } from "./asyncActions";

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

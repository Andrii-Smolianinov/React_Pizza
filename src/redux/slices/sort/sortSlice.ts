import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SortSliceState } from "./sortTypes";

const initialState: SortSliceState = {
  filterCategories: 0,
  sortCategories: "price",
  activeTypePizza: [],
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setFilterCategories(state, action: PayloadAction<number>) {
      state.filterCategories = action.payload;
    },
    setSortCategories(state, action: PayloadAction<string>) {
      state.sortCategories = action.payload;
    },
    setActiveTypePizza(state, action: PayloadAction<string[]>) {
      state.activeTypePizza = action.payload;
    },
  },
});

export const { setSortCategories, setFilterCategories, setActiveTypePizza } =
  sortSlice.actions;

export const selectSort = (state: RootState) => state.sort;

export default sortSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SortSliceState {
  filterCategory: number;
  sortCategory: string;
  activeTypePizza: string[];
}

export const initialState: SortSliceState = {
  filterCategory: 0,
  sortCategory: "price",
  activeTypePizza: [],
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setFilterCategory(state, action: PayloadAction<number>) {
      state.filterCategory = action.payload;
    },
    setSortCategory(state, action: PayloadAction<string>) {
      state.sortCategory = action.payload;
    },
    setActiveTypePizza(state, action: PayloadAction<string[]>) {
      state.activeTypePizza = action.payload;
    },
  },
});

export const { setSortCategory, setFilterCategory, setActiveTypePizza } =
  sortSlice.actions;

export const selectSort = (state: RootState) => state.sort;

export default sortSlice.reducer;

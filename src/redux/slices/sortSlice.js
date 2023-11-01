import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filterCategory: 0,
  sortCategory: "price",
  activeTypePizza: "Усі",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
    setSortCategory(state, action) {
      state.sortCategory = action.payload;
    },
    setParamsFromURL(state, action) {
      state.filterCategory = Number(action.payload.filterCategory);
      state.sortCategory = action.payload.sortCategory;
    },
    setActiveTypePizza(state, action) {
      state.activeTypePizza = action.payload;
    },
  },
});

export const {
  setSortCategory,
  setFilterCategory,
  setParamsFromURL,
  setActiveTypePizza,
} = sortSlice.actions;

export default sortSlice.reducer;

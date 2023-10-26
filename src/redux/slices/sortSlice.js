import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortCategory: 0,
  activeTypePizza: "Усі",
  filterCategory: " ",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortCategory(state, action) {
      state.sortCategory = action.payload;
    },
    setTypePizza(state, action) {
      state.activeTypePizza = action.payload;
    },
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setSortCategory, setTypePizza, setFilterCategory } =
  sortSlice.actions;

export default sortSlice.reducer;

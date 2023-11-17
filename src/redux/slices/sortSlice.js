import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filterCategory: 0,
  sortCategory: "price",
  activeTypePizza: "Усі"
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
    setActiveTypePizza(state, action) {
      state.activeTypePizza = action.payload;
    },    
  },
});

export const { setSortCategory, setFilterCategory, setActiveTypePizza } = sortSlice.actions;

export const selectSort = state => state.sort;

export default sortSlice.reducer;

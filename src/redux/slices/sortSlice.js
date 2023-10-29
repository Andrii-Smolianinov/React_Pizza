import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: 0,
  activeTypePizza: "Усі",
  sortCategory: "price",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
    setTypePizza(state, action) {
      state.activeTypePizza = action.payload;
    },
    setSortCategory(state, action) {
      state.sortCategory = action.payload;
    },
    setFiltersFromURL(state, action) {
      state.filterCategory = action.payload.filterCategory 
      state.sortCategory = action.payload.sortCategory
    }
  },
});

export const { setSortCategory, setTypePizza, setFilterCategory, setFiltersFromURL } =
  sortSlice.actions;

export default sortSlice.reducer;

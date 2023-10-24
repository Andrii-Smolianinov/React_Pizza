import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: " ",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setFilterCategory } = filterSlice.actions;

export default filterSlice.reducer;

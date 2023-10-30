import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filterCategory: 0,
  sortCategory: "price",
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
      console.log("action.payload.filterCategory", action.payload.filterCategory);
      state.sortCategory = action.payload.sortCategory;
      console.log("action.payload.sortCategory", action.payload.sortCategory);
    },
    
  },
});

export const { setSortCategory, setFilterCategory, setParamsFromURL } =
  sortSlice.actions;

export default sortSlice.reducer;

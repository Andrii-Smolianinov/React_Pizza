import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCategory: 0,  
  sortCategory: "price",
};

export const sortSlice = createSlice({
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
      state.filterCategory = Number(action.payload.filterCategory)  
      state.sortCategory = action.payload.sortCategory
      console.log("state.filterCategory", state.filterCategory);
      console.log("state.sortCategory", state.sortCategory);
    }
  },
});

export const { setSortCategory, setFilterCategory, setParamsFromURL } =
  sortSlice.actions;

export default sortSlice.reducer;

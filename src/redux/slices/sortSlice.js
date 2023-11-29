import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filterCategory: 0,
  sortCategory: "price",
  activeTypePizza: "Усі",
  activeIndexLang: 0,
  selectLang: "ua",
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
    setActiveIndexLang(state, action) {
      state.activeIndexLang = Number(action.payload);
    },
    setSelectLang(state, action) {
      state.selectLang = action.payload;
    },
  },
});

export const {
  setSortCategory,
  setFilterCategory,
  setActiveTypePizza,
  setActiveIndexLang,
  setSelectLang,
} = sortSlice.actions;

export const selectSort = (state) => state.sort;

export default sortSlice.reducer;

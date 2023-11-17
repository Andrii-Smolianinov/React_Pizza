import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchPizza: "",
};

export const searchSlice = createSlice({
  name: "searchPizza",
  initialState,
  reducers: {
    setSearchPizza(state, action) {
      state.searchPizza = action.payload;
    },
  },
});

export const { setSearchPizza } = searchSlice.actions;

export const selectSearch = state => state.search;

export default searchSlice.reducer;

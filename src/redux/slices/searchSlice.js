import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchPizza: "",
};

export const searchSlise = createSlice({
  name: "searchPizza",
  initialState,
  reducers: {
    setSearchPizza(state, action) {
      state.searchPizza = action.payload;
    },
  },
});

export const { setSearchPizza } = searchSlise.actions;

export default searchSlise.reducer;

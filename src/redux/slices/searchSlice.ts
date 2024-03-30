import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  searchPizza: "",
};

export const searchSlice = createSlice({
  name: "searchPizza",
  initialState,
  reducers: {
    setSearchPizza(state, action: PayloadAction<string>) {
      state.searchPizza = action.payload;
    },
  },
});

export const { setSearchPizza } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;

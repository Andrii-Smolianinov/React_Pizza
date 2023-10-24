import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortCategory: 0,
  typePizza: 'Усі'
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortCategory(state, action) {
      state.sortCategory = action.payload;
    },
    setTypePizza(state, action) {
      state.typePizza = action.payload
    }
  },
});

export const { setSortCategory, setTypePizza } = sortSlice.actions;

export default sortSlice.reducer;

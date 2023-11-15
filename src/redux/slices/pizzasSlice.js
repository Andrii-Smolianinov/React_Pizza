import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    itemsData: [],
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItemsData(state, action) {
      state.itemsData = action.payload
    },
  },
});

export const { setItemsData } = pizzasSlice.actions;

export default pizzasSlice.reducer;

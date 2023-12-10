import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndexPage: 0,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setActiveIndexPage(state, action) {
      state.activeIndexPage = action.payload;
    },
    setCurrentPage(state, action) {
        state.currentPage = action.payload
    },
    setClearСurrentPage(state) {
        state.currentPage = 1
    }
  },
});

export const { setActiveIndexPage, setCurrentPage, setClearСurrentPage } = paginationSlice.actions;

export const selectPagination = state => state.pagination;

export default paginationSlice.reducer;
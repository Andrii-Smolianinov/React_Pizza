import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PaginationSliceState } from "./paginationTypes";

const initialState: PaginationSliceState = {
  activeIndexPage: 0,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setActiveIndexPage(state, action: PayloadAction<number>) {
      state.activeIndexPage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveIndexPage, setCurrentPage } = paginationSlice.actions;

export const selectPagination = (state: RootState) => state.pagination;

export default paginationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  activeIndexLang: 0,
  selectLang: "ua",
};

const changeLangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setActiveIndexLang(state, action) {
      state.activeIndexLang = Number(action.payload);
    },
    setSelectLang(state, action) {
      state.selectLang = action.payload;
    },
  },
});

export const { setActiveIndexLang, setSelectLang } = changeLangSlice.actions;

export const changeLang = (state) => state.lang;

export default changeLangSlice.reducer;

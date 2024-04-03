import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ChangeLangSliceState {
  activeIndexLang: number;
  selectLang: "ua" | "en";
}

const initialState: ChangeLangSliceState = {
  activeIndexLang: 0,
  selectLang: "ua",
};

export const changeLangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setActiveIndexLang(state, action: PayloadAction<number>) {
      state.activeIndexLang = Number(action.payload);
    },
    setSelectLang(state, action: PayloadAction<"ua" | "en">) {
      state.selectLang = action.payload;
    },
  },
});

export const { setActiveIndexLang, setSelectLang } = changeLangSlice.actions;

export const selectChangeLang = (state: RootState) => state.lang;

export default changeLangSlice.reducer;

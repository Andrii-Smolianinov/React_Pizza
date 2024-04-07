import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Data } from "./pizzasTypes";

export const fetchPizzasActions = createAsyncThunk<Data[]>(
  "pizzas/fetchPizzasStatus",
  async (_, thunkApi) => {   
    const state = thunkApi.getState() as RootState;
    const { filterCategories, sortCategories } = state.sort;

    const categories = filterCategories > 0 ? `categories=${filterCategories}` : "";
    const sortBy = sortCategories ? `sortBy=${sortCategories}` : "";

    const { data } = await axios.get<Data[]>(
      `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items?${categories}&${sortBy}`
    );
    return data;
  }
);
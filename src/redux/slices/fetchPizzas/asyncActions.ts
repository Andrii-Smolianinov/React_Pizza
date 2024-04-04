import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Data } from "./pizzasTypes";

export const fetchPizzasSlice = createAsyncThunk<
  Data[],
  Record<string, string>
>("pizzas/fetchPizzasStatus", async (params) => {
  const { category, sortBy } = params;
  const { data } = await axios.get<Data[]>(
    `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items?${category}&${sortBy}`
  );
  return data;
});

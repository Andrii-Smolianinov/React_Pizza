import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import sort from "./slices/sort/sortSlice";
import search from "./slices/search/searchSlice";
import cart from "./slices/cart/cartSlice";
import pizzas from "./slices/fetchPizzas/pizzasSlice";
import lang from "./slices/changeLang/changeLangSlice";
import pagination from "./slices/pagination/paginationSlice";
import { type } from "os";

const rootReducer = combineReducers({
  sort,
  search,
  cart,
  pizzas,
  lang,
  pagination,
});

export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

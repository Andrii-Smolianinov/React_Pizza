import React, { useState, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/store";
import { fetchPizzasActions } from "./redux/slices/fetchPizzas/asyncActions";
import { selectSort } from "./redux/slices/sort/sortSlice";

import { AppContext } from "./hooks/useAppState";

import Home from "./pages/Home";
import { Header, Container } from "./components";

const Cart = lazy(() => import("./pages/Cart"));
const FullPizza = lazy(() => import("./pages/FullPizza"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [showSearch, setShowSearch] = useState<boolean | null>(true);
  const [showButtonCart, setShowButtonCart] = useState<boolean | null>(true);  
  const [pizzasPerPage] = useState(10);
  const [isEmptyCart] = useState(true);

  const { sortCategories, filterCategories } = useSelector(selectSort);
  const dispatch = useAppDispatch();

  const fetchPizzas = async () => {
    dispatch(fetchPizzasActions());
  };

  useEffect(() => {
    fetchPizzas();

    // eslint-disable-next-line
  }, [sortCategories, filterCategories]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
          pizzasPerPage
        }}
      >
        <Header showSearch={showSearch} showButtonCart={showButtonCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<FullPizza />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

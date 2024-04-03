import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/store";
import { fetchPizzasSlice } from "./redux/slices/pizzasSlice";
import { selectSort } from "./redux/slices/sortSlice";

import { AppContext } from "./hooks/useAppState";

import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Container from "./Container";
import Header from "./components/Header";

function App() {
  const [showSearch, setShowSearch] = useState<boolean | null>(true);
  const [showButtonCart, setShowButtonCart] = useState<boolean | null>(true);
  const [pizzasPerPage] = useState(10);
  const [isEmptyCart] = useState(true);

  const { sortCategory, filterCategory } = useSelector(selectSort);  
  const dispatch = useAppDispatch();

  const fetchPizzas = async () => {
    const category: string = filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy: string = sortCategory ? `sortBy=${sortCategory}` : "";

    dispatch(fetchPizzasSlice({ category, sortBy }));
  };

  React.useEffect(() => {
    fetchPizzas();

    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
          pizzasPerPage,
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

import React from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPizzasSlice } from "./redux/slices/pizzasSlice";
import { selectSort } from "./redux/slices/sortSlice";

import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import Container from "./Container";
import Header from "./components/Header";

export const AppContext = React.createContext();

function App() {
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  const [pizzasPerPage] = React.useState(10);
  const [isEmptyCart] = React.useState(true);

  const { sortCategory, filterCategory } = useSelector(selectSort);
  const dispatch = useDispatch();

  const fetchPizzas = async () => {
    const category = filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy = sortCategory ? `sortBy=${sortCategory}` : "";

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

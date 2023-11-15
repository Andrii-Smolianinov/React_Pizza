import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setItemsData } from "./redux/slices/pizzasSlice";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Container from "./Container";
import Header from "./components/Header";

export const AppContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  const [isEmptyCart] = React.useState(true);

  const { sortCategory, filterCategory } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const fetchPizzas = async () => {
    const category = filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy = sortCategory ? `sortBy=${sortCategory}` : "";

    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://64fad951cb9c00518f7a461b.mockapi.io/items?${category}&${sortBy}`
      );
      dispatch(setItemsData(data));
    } catch (error) {
      console.log("catchError", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPizzas();
    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{          
          isLoading,
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
        }}
      >
        <Header showSearch={showSearch} showButtonCart={showButtonCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Container from "./Container";
import Header from "./components/Header";

export const AppContext = React.createContext();

function App() {
  const [itemsData, setItemsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  const [isEmptyCart] = React.useState(true);

  const { sortCategory, filterCategory } = useSelector((state) => state.sort);

  const fetchPizzas = () => {
    const category = filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy = sortCategory ? `sortBy=${sortCategory}` : "";

    setIsLoading(true);

    axios
      .get(
        `https://64fad951cb9c00518f7a461b.mockapi.io/items?${category}&${sortBy}`
      )
      .then((res) => {
        setItemsData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  };

  React.useEffect(() => {
    fetchPizzas();    
    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          itemsData,
          isLoading,
          setShowSearch,
          setShowButtonCart,
          isEmptyCart
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

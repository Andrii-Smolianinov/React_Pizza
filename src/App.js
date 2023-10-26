import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Container from "./Container";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const AppContext = React.createContext();

function App() {
  const { sortCategory, filterCategory } = useSelector((state) => state.sort);

  const [itemsData, setItemsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  const [isEmptyCart] = React.useState(true);

  React.useEffect(() => {
    const category = sortCategory > 0 ? `category=${sortCategory}` : "";
    const sortBy = filterCategory ? `sortBy=${filterCategory}` : "";

    setIsLoading(true);
    fetch(
      `https://64fad951cb9c00518f7a461b.mockapi.io/items?${category}&${sortBy}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log("response error", res.status);
      })
      .then((data) => {
        setItemsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  }, [sortCategory, filterCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          itemsData,
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

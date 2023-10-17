import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const AppContext = React.createContext();
function App() {
  const [itemsData, setItemsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeIndexSort, setActiveIndexSort] = React.useState(0);
  const [activeTypePizza, setActiveTypePizza] = React.useState("Усі");
  const [selectCategory, setSelectCategory] = React.useState("");
  const [searchPizza, setSearchPizza] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  // eslint-disable-next-line
  const [isEmptyCart, setIsEmptyCart] = React.useState(true);

  React.useEffect(() => {
    const category = activeIndexSort > 0 ? `category=${activeIndexSort}` : "";
    const sortBy = selectCategory ? `sortBy=${selectCategory}` : "";

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
  }, [activeIndexSort, selectCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          searchPizza,
          setSearchPizza,
          activeIndexSort,
          setActiveIndexSort,
          activeTypePizza,
          setActiveTypePizza,
          selectCategory,
          setSelectCategory,
          itemsData,
          isLoading,
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
        }}
      >
        <Header showSearch={showSearch} showButtonCart={showButtonCart} />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

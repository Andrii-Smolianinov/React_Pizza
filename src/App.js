import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [items, setItems] = React.useState([]);
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
    setIsLoading(true);
    fetch(
      `https://64fad951cb9c00518f7a461b.mockapi.io/items?category=${activeIndexSort}&sortBy=${selectCategory}`,
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
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  }, [activeIndexSort, selectCategory]);

  return (
    <Container>
      <Header
        searchPizza={searchPizza}
        setSearchPizza={setSearchPizza}
        showSearch={showSearch}
        showButtonCart={showButtonCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              isLoading={isLoading}
              searchPizza={searchPizza}
              activeIndexSort={activeIndexSort}
              setActiveIndexSort={setActiveIndexSort}
              activeTypePizza={activeTypePizza}
              setActiveTypePizza={setActiveTypePizza}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
              setShowSearch={setShowSearch}
              setShowButtonCart={setShowButtonCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              isLoading={isLoading}
              isEmptyCart={isEmptyCart}
              setShowSearch={setShowSearch}
              setShowButtonCart={setShowButtonCart}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              setShowSearch={setShowSearch}
              setShowButtonCart={setShowButtonCart}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;

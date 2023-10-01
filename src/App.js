import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeIndexSort, setActiveIndexSort] = React.useState(0);
  const [activeTypePizza, setActiveTypePizza] = React.useState("Усі");
  const [selectCategory, setSelectCategory] = React.useState("");

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
        setIsLoading(false)
        
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  }, [activeIndexSort, selectCategory]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              isLoading={isLoading}
              activeIndexSort={activeIndexSort}
              setActiveIndexSort={setActiveIndexSort}
              activeTypePizza={activeTypePizza}
              setActiveTypePizza={setActiveTypePizza}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart items={items} isLoading={isLoading} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;

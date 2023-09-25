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

  React.useEffect(() => {
    fetch("https://64fad951cb9c00518f7a461b.mockapi.io/items", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log("response error", res.status);
      })
      .then((data) => {
        setTimeout(() => {
          setItems(data);
          setIsLoading(false);
        }, 1500);
        console.log("data", data);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home items={items} isLoading={isLoading} />}
        />
        <Route path="/cart" element={<Cart items={items} isLoading={isLoading} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;

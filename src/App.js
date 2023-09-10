import React from "react";
import Container from "./Container";
import Header from "./components/Header";
import Sort from "./components/Sort/Sort";
import Main from "./pages/Main";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  fetch("https://64fad951cb9c00518f7a461b.mockapi.io/items", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log('response error', res.status);
    })
    .then((data) => {
      console.log('data', data);
      setItems(data);
    })
    .catch((error) => {
      console.log("error", error);
    });

  return (
    <Container>
      <Header />
      <Sort />
      <Main items={items} />
    </Container>
  );
}

export default App;

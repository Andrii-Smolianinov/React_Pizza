import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";

export default function Home() {
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
      window.scrollTo(0, 0)
  }, []);


  return (
    <div className="bg-yellow-100">
      <Sort />
      <PizzaList items={items} isLoading={isLoading}/>
    </div>
  );
}

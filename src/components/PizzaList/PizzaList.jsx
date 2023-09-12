import React from "react";
import PizzaItem from "./PizzaItem/PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";

export default function PizzaList() {
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
        }, 1000);
        console.log("data", data);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  }, []);

  return (
    <ul className="p-[40px] flex flex-wrap gap-8 justify-center">
      {isLoading
        ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <PizzaItem key={obj.id} items={items} />)}
    </ul>
  );
}

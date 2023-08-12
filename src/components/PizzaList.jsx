import React from "react";

export default function PizzaList(props) {
console.log(props);
  return (
    <div>
      <p>name: {props.name}</p>
      <p>price: {props.price}</p>
    </div>
  );
}

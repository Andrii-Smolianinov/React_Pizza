import React from "react";

const diameters = ["26", "30", "40"];

export default function DiameterEL() {
  const [activeDiameter, setActiveDiameter] = React.useState(0);

  return diameters.map((diameter, index) => (
    <li
      key={index}
      onClick={() => setActiveDiameter(index)}
      className={`p-1 mx-1 font-bold rounded ${
        activeDiameter === index ? "bg-amber-50" : "hover:bg-rose-200"
      }`}
    >
      <button><span className="font-serif">{diameter}</span>см</button>
    </li>
  ));
}
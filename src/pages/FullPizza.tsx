import React from "react";
import FullPizzaComponent from "../components/FullPizzaComponent";
import { useAppState } from "../hooks/useAppState";

const FullPizza: React.FC = () => {
  const { setShowSearch } = useAppState();

  React.useEffect(() => {
    setShowSearch(false);
  });

  return <FullPizzaComponent />;
};

export default FullPizza;

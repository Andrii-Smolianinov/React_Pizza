import React from "react";
import FullPizzaComponent from "../components/FullPizzaComponent";

import { AppContext } from "../App";

const FullPizza: React.FC = () => {
  //@ts-ignore
  const { setShowSearch } = React.useContext(AppContext);

  React.useEffect(() => {
    setShowSearch(false);
  });

  return <FullPizzaComponent />;
};

export default FullPizza;

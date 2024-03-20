import React from "react";

import NotFoundSection from "../components/NotFoundSection";
import { AppContext } from "../App";

const NotFound: React.FC = () => {
  //@ts-ignore
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return <NotFoundSection />;
};

export default NotFound;

import React from "react";

import NotFoundSection from "../components/NotFoundSection";
import { AppContext } from "../App";

export default function NotFound() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return <NotFoundSection />;
}

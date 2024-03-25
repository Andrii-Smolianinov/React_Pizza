import React from "react";

import NotFoundSection from "../components/NotFoundSection";
import { useAppState } from "../App";

const NotFound: React.FC = () => {
  const { setShowSearch, setShowButtonCart } = useAppState();

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return <NotFoundSection />;
};

export default NotFound;

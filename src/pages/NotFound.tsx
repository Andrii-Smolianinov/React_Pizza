import React from "react";

import NotFoundSection from "../components/NotFoundSection";
import { useAppState } from "../hooks/useAppState";

const NotFound: React.FC = () => {
  console.log('this NotFound');
  const { setShowSearch, setShowButtonCart } = useAppState();

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return <NotFoundSection />;
};

export default NotFound;

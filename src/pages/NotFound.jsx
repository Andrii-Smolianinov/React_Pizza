import React from "react";

import NotFoundSection from "../components/NotFoundSection";

export default function NotFound({setShowSearch, setShowButtonCart}) {
  setShowSearch(false)
  setShowButtonCart(false)
  return <NotFoundSection />;
}

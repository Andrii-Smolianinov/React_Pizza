import React, { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPizzasSlice } from "./redux/slices/pizzasSlice";
import { selectSort } from "./redux/slices/sortSlice";

import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Container from "./Container";
import Header from "./components/Header";

export type AppContextProps = {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean | null>>;
  setShowButtonCart: React.Dispatch<React.SetStateAction<boolean | null>>;
  isEmptyCart: boolean;
  pizzasPerPage: number;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

function App() {
  const [showSearch, setShowSearch] = useState<boolean | null>(true);
  const [showButtonCart, setShowButtonCart] = useState<boolean | null>(true);
  const [pizzasPerPage] = useState(10);
  const [isEmptyCart] = useState(true);

  const { sortCategory, filterCategory } = useSelector(selectSort);
  const dispatch = useDispatch();

  const fetchPizzas = async () => {
    const category: string =
      filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy: string = sortCategory ? `sortBy=${sortCategory}` : "";

    //@ts-ignore
    dispatch(fetchPizzasSlice({ category, sortBy }));
  };

  React.useEffect(() => {
    fetchPizzas();

    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  return (
    <Container>
      <AppContext.Provider
        value={{
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
          pizzasPerPage,
        }}
      >
        <Header showSearch={showSearch} showButtonCart={showButtonCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<FullPizza />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

export function useAppState() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
}

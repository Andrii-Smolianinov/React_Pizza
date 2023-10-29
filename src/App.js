import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";

import { setParamsFromURL } from "./redux/slices/sortSlice";

import Container from "./Container";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const AppContext = React.createContext();

function App() {
  const [itemsData, setItemsData] = React.useState([]);
  const [activeTypePizza, setActiveTypePizza] = React.useState('Усі');
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showButtonCart, setShowButtonCart] = React.useState(true);
  const [isEmptyCart] = React.useState(true);

  const { sortCategory, filterCategory } = useSelector((state) => state.sort);
  console.log('sortCategory from redux', sortCategory);
  console.log('filterCategory from redux', filterCategory);

  const navigate = useNavigate();
  const dispatch = useDispatch();

    
  React.useEffect(() => {
    const category = filterCategory > 0 ? `category=${filterCategory}` : "";
    const sortBy = sortCategory ? `sortBy=${sortCategory}` : "";
    console.log("category 1 useEffect - axios", category);
    console.log("sortBy 1 useEffect - axios", sortBy);
    setIsLoading(true);

    axios
      .get(
        `https://64fad951cb9c00518f7a461b.mockapi.io/items?${category}&${sortBy}`
      )
      .then((res) => {
        setItemsData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("catchError", error);
      });
  }, [sortCategory, filterCategory]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      filterCategory,
      sortCategory,
    });
    navigate(`?${queryString}`);
    console.log("queryString 2 useEffect - navigate", queryString);
    console.log("filterCategory 2 useEffect - navigate", filterCategory);
    console.log("sortCategory 2 useEffect - navigate", sortCategory);
    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log("window.location.search 3 useEffect", window.location.search);
      console.log("window.location 3 useEffect", window.location);
      console.log("params 3 useEffect", params);
      
      dispatch(setParamsFromURL({ ...params }));
    }
    // eslint-disable-next-line
  }, [sortCategory, filterCategory]);

  
  

  return (
    <Container>
      <AppContext.Provider
        value={{
          itemsData,
          isLoading,
          setShowSearch,
          setShowButtonCart,
          isEmptyCart,
          activeTypePizza, setActiveTypePizza
        }}
      >
        <Header showSearch={showSearch} showButtonCart={showButtonCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Container>
  );
}

export default App;

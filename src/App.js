import "./App.css";
import GlobalCSS from "./globalStyles";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import { useUserContext } from "./context/userContext";

import Home from "./pages/home";
import Details from "./pages/details";
import Category from "./pages/category";
import Search from "./pages/search";
import CreateProduct from "./pages/addProduct";
import Login from "./pages/login";
import Bag from "./pages/bag";
import Editproduct from "./pages/editProducts";
import { useEffect, useState } from "react";

function App() {
  const { isLogged } = useUserContext();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const local = window.location.pathname;
      console.log(local);
      if (local === "/admin/editproduct" || local === "/admin/newproduct" || local === "/bag") {
        return;
      } else {
        setScroll(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <GlobalCSS />
      <BrowserRouter>
        <Header scroll={scroll} />
        <Routes>
          <Route path="/" element={<Home scroll={scroll} />} />
          <Route path="/product/:id" element={<Details scroll={scroll} />} />
          <Route path="/category/:id" element={<Category scroll={scroll} />} />
          <Route path="/search" element={<Search scroll={scroll} />} />
          <Route
            path="/admin/newproduct"
            element={!isLogged ? <Navigate to="/login" /> : <CreateProduct />}
          />
          <Route
            path="/admin/editproduct"
            element={!isLogged ? <Navigate to="/login" /> : <Editproduct />}
          />
          <Route
            path="/login"
            element={isLogged ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

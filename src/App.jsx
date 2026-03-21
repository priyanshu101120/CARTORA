import React from "react";
import ProductsGrid from "./Components/products/ProductsGrid";
import Navbar from "./Components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import ContactForm from "./Components/pages/contact";
import Footer from "./Components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/:category" element={<ProductsGrid />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

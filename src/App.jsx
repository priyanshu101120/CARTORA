import React from "react";
import ProductsGrid from "./Components/products/ProductsGrid";
import Navbar from "./Components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import ContactForm from "./Components/pages/contact";
import Footer from "./Components/layout/Footer";
import Checkout from "./Components/pages/Checkout";
import SingleProduct from "./Components/pages/SingleProduct";
import AuthModal from "./Components/pages/AuthModal";
import { useState } from "react";
import { useEffect } from "react";
import Auth from "./Components/pages/Auth";
import { useLocation } from "react-router-dom";
import Loader from "./Components/pages/Loader";
import { supabase } from "./supabase/supabase";

const App = () => {
  const location = useLocation();
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (location.pathname === "/login") return;
    if (loading) return;
    if (user) return;

    const timer = setTimeout(() => {
      setShowAuth(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [user, loading, location.pathname]);

  // 🔥 Loader show
  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/:category" element={<ProductsGrid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Auth />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);

  // ✅ Optimized filter (useMemo)
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter(
      (item) =>
        item.Description?.toLowerCase().includes(search.toLowerCase()) ||
        item.Brand?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, products]);

  const handleSelect = (item) => {
    setSearch("");
    navigate(`/product/${item.id}`);
  };

  const linkClass = ({ isActive }) =>
    isActive ? "border-b-2 border-white pb-1" : "pb-1 hover:text-gray-300";

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-3 py-2 flex items-center gap-3">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-sm sm:text-xl font-bold whitespace-nowrap"
      >
        CARTORA
      </NavLink>

      {/* 🔍 Search */}
      <div className="relative flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full px-2 sm:px-4 py-1 text-sm rounded border border-white bg-black outline-none"
        />

        {/* Dropdown */}
        {search && (
          <div className="absolute top-9 left-0 w-full bg-white text-black rounded shadow-lg max-h-60 overflow-y-auto z-50">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                >
                  <img
                    src={item.Image}
                    alt={item.Description}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <span className="text-xs sm:text-sm line-clamp-1">
                    {item.Description}
                  </span>
                </div>
              ))
            ) : (
              <p className="p-2 text-sm">No products found</p>
            )}
          </div>
        )}
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Cart */}
      <NavLink to="/cart" className="relative text-sm sm:text-base">
        🛒
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 rounded-full">
            {totalQty}
          </span>
        )}
      </NavLink>
    </nav>
  );
};

export default Navbar;

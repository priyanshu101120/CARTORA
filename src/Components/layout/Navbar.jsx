import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);
  const linkClass = ({ isActive }) =>
    isActive ? "border-b-2 border-white pb-1" : "pb-1";

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-6 h-16 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold">
        CARTORA
      </NavLink>

      {/* Center Section */}
      <div className="flex items-center gap-16 ml-auto">
        <input
          type="text"
          placeholder="search..."
          className="px-4 py-1 rounded border-2 border-white bg-black text-white outline-none w-64"
        />

        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>

        <NavLink to="/cart" className={linkClass}>
          Cart
          {totalQty > 0 && (
            <span className="absolute top-2 right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {totalQty}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

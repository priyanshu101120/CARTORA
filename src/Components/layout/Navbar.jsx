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
    isActive
      ? "border-b-2 border-white pb-1"
      : "pb-1 hover:text-gray-300 hover:scale-115 transition-transform";

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-3 py-2 flex items-center gap-14">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-sm sm:text-xl font-bold whitespace-nowrap"
      >
        CARTORA
      </NavLink>

      {/* 🔍 Search */}
      <div className="ml-auto ">
        <div className="relative" id="input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="block w-full text-sm h-10 px-4 text-slate-900 bg-white rounded-lg border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-12"
            id="floating_outlined"
          />
          <label
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-left bg-black data-disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto inset-s-1"
            htmlFor="floating_outlined"
          >
            Search...
          </label>
          <div className="absolute top-2 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="slate-300"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"></path>
              <rect
                transform="rotate(-49.6812 12.2469 14.8859)"
                rx="1"
                height="10.1881"
                width="2"
                y="14.8859"
                x="12.2469"
              ></rect>
            </svg>
          </div>
        </div>

        {/* Dropdown */}
        {search && (
          <div className=" px-2 sm:px-4 py-1 text-sm rounded border border-white bg-black outline-none overflow-hidden absolute mt-1 max-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="p-2 hover:bg-gray-200 hover:text-black cursor-pointer flex items-center gap-2"
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
      <div className="hidden sm:flex items-center gap-10">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Cart */}
      <NavLink
        to="/cart"
        className="relative mr-8 text-2xl sm:text-base hover:scale-125 transition-transform"
      >
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

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../../Redux/Features/cart/cartSlice";

const ProductCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-9"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded bg-gray-600 text-white transition-all duration-500
        ${hovered ? "opacity-100 visible -top-10" : "opacity-0 invisible -top-6"}`}
      >
        {product.Price}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-600"></div>
      </div>

      {/* Button */}
      <div className="relative w-full h-full bg-black rounded-md overflow-hidden cursor-pointer">
        {/* Text */}
        {!cartItem ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="h-full w-full px-4 flex items-center justify-center bg-black text-white rounded-lg text-xl sm:text-sm hover:bg-gray-800 active:scale-95 transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className=" h-full w-full flex items-center px-12 gap-2 bg-black rounded-lg">
            <button
              onClick={() => dispatch(decreaseQty(product.id))}
              className="px-2 text-2xl font-bold"
            >
              -
            </button>

            <span className="text-lg font-medium">{cartItem.quantity}</span>

            <button
              onClick={() => dispatch(increaseQty(product.id))}
              className="px-2 text-xl font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCartButton;

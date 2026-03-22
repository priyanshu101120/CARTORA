import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../../Redux/Features/cart/cartSlice";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white shadow-sm rounded-xl p-3 sm:p-4 flex flex-col h-full hover:shadow-lg transition">
      {/* 🖼 Image */}
      <div className="w-full h-40 sm:h-48 flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={product.Image}
          alt={product.Description}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 📄 Content */}
      <div className="flex flex-col flex-1 mt-3">
        <h2 className="text-sm sm:text-base font-semibold line-clamp-1">
          {product.Brand}
        </h2>

        <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2 min-h-10">
          {product.Description}
        </p>

        {/* 💰 Bottom */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-base sm:text-lg font-bold">
            {product.Price}
          </span>

          {!cartItem ? (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="h-9 px-4 flex items-center justify-center bg-black text-white rounded-lg text-xs sm:text-sm hover:bg-gray-800 active:scale-95 transition"
            >
              Add to Cart
            </button>
          ) : (
            <div className="h-9 flex items-center gap-2 bg-gray-100 px-2 rounded-lg">
              <button
                onClick={() => dispatch(decreaseQty(product.id))}
                className="px-2 text-sm font-bold"
              >
                -
              </button>

              <span className="text-sm font-medium">{cartItem.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(product.id))}
                className="px-2 text-sm font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

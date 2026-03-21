import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../../Redux/Features/cart/cartSlice";

const ProductsCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === product.id);

  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col h-full hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        <img
          src={product.Image}
          alt={product.name}
          className="w-full h-full object-cotain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col grow mt-3">
        <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2 grow">
          {product.Description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">{product.Price}</span>

          {!cartItem ? (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-lg">
              <button
                onClick={() => dispatch(decreaseQty(product.id))}
                className="text-lg font-bold px-2"
              >
                -
              </button>

              <span className="font-medium">{cartItem.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(product.id))}
                className="text-lg font-bold px-2"
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

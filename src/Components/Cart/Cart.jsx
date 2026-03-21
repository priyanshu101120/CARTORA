import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../Redux/Features/cart/cartSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalamount, totalquantity } = useSelector(
    (state) => state.cart,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <IoAddSharp
          onClick={() => navigate("/")}
          className="text-7xl text-gray-600 cursor-pointer hover:text-black transition"
        />

        <p className="text-lg text-black">Your cart is empty</p>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex items-center gap-2">
        <IoMdArrowRoundBack
          className="size-6 mb-2"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl font-bold mb-4">Cart ({cartItems.length})</h1>
      </div>

      {cartItems.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between border rounded-xl p-4 mb-4 shadow-sm"
        >
          {/* Image */}
          <img
            src={item.Image}
            alt={item.Name}
            className="w-28 h-28 object-cover rounded"
          />

          {/* Details */}
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">{item.Title}</h2>
            <p className="text-gray-500 text-sm">{item.Description}</p>

            {/* Quantity */}
            <div className="flex items-center mt-3 space-x-2">
              <button
                onClick={() => dispatch(removeToCart(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>

              <span className="px-3">{item.quantity}</span>

              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg font-bold">{item.Price}</p>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="text-right mt-6">
        <h2 className="text-xl font-bold">Total: ₹{totalamount}</h2>
      </div>
    </div>
  );
};

export default Cart;

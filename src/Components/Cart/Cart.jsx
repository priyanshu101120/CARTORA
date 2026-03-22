import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../Redux/Features/cart/cartSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, subtotal, gst, delivery, total } = useSelector(
    (state) => state.cart,
  );

  // 🛑 Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <IoAddSharp
          onClick={() => navigate("/")}
          className="text-6xl text-gray-600 cursor-pointer hover:text-black transition"
        />
        <p className="text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <IoMdArrowRoundBack
          className="text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl md:text-2xl font-bold">
          Cart ({cartItems.length})
        </h1>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 border rounded-xl p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={item.Image}
              alt={item.Description}
              className="w-full sm:w-28 h-28 object-contain rounded"
            />

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-sm md:text-base font-semibold line-clamp-2">
                {item.Description}
              </h2>

              {/* Quantity */}
              <div className="flex items-center mt-3 gap-2">
                <button
                  onClick={() => dispatch(removeToCart(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="px-2">{item.quantity}</span>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-right sm:min-w-100px">
              <p className="font-bold text-base md:text-lg">
                {item.Price?.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 💰 Summary Section */}
      <div className="mt-6 w-full sm:w-80 ml-auto border rounded-lg p-4 bg-white shadow">
        <div className="flex justify-between mb-2 text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <span>GST (18%)</span>
          <span>₹{gst.toFixed(0)}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <span>Delivery</span>
          <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg active:scale-95 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

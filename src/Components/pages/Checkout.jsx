import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { subtotal, gst, delivery, total } = useSelector((state) => state.cart);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 🧾 Form Section */}
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4 text-lg">Shipping Details</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-black text-sm"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-black text-sm"
            />

            <textarea
              placeholder="Full Address"
              rows="3"
              className="w-full border p-2 rounded outline-none focus:ring-2 focus:ring-black text-sm"
            />
          </form>
        </div>

        {/* 💰 Order Summary */}
        <div className="w-full md:w-80 bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4 text-lg">Order Summary</h2>

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

          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg active:scale-95 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

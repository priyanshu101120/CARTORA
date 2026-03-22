import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./Features/Products/ProductSlice";
import cartreducer from "./Features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productreducer,
    cart: cartreducer
  },



})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
})
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  totalamount: 0,

}

const calculateTotals = (cartItems) => {
  return cartItems.reduce((acc, item) => { const price = Number(item.Price.replace("₹", "")); return acc + price * item.quantity; }, 0);
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;



      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }
      state.totalamount = calculateTotals(state.cartItems);
    },
    removeToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        }
      }
      state.totalamount = calculateTotals(state.cartItems);
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
        }
      }
    }
  }
})


export const { addToCart, removeToCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;

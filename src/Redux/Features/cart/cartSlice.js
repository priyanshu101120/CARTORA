import { createSlice } from "@reduxjs/toolkit";


const loadCartItemsFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return []
  }
}

const initialState = {
  cartItems: [],
  cartItems: loadCartItemsFromLocalStorage(),
  totalamount: 0,
  subtotal: 0,
  gst: 0,
  delivery: 0,
  total: 0,

}




const calculateTotals = (cartItems) => {
  const subtotal = cartItems.reduce((acc, item) => { const price = Number(item.Price.replace(/[^0-9]/g, "")); return acc + price * item.quantity; }, 0);

  const gst = subtotal * 0.18; // 18% GST
  const delivery = subtotal > 500 ? 0 : 50; // free above ₹500
  const total = subtotal + gst + delivery;

  return {
    subtotal,
    gst,
    delivery,
    total
  }
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
        state.cartItems.push({
          ...item,
          quantity: 1
        })
      }

      Object.assign(state, calculateTotals(state.cartItems));
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
      Object.assign(state, calculateTotals(state.cartItems));
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
      Object.assign(state, calculateTotals(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
        }
      }
      Object.assign(state, calculateTotals(state.cartItems));
    }
  }
})


export const { addToCart, removeToCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
}






const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.products = action.payload
    },
    setloading: (state, action) => {
      state.loading = action.payload
    },
    seterror: (state, action) => {
      state.error = action.payload
    }
  }

})

export const { setproducts, setloading, seterror } = productSlice.actions;
export default productSlice.reducer;


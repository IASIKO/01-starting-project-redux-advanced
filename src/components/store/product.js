import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  title: "Test",
  price: 6,
  description: "This is a first product - amazing!",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    addToCart(state, action) {},
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;

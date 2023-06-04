import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {price: 6};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    addToCart() {},
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;

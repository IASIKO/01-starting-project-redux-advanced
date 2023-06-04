import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {quantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

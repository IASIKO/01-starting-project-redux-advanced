import { createSlice } from "@reduxjs/toolkit";

const initalCartState = { quantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    increment(state) {
      state.quantity++;
    },
    decrement(state) {
      if (state.quantity > 0) {
        state.quantity--;
      }
      if ((state.quantity === 0)) {
        return (state.showCart = false);
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

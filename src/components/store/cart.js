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
      return 
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state) {
      state.quantity++
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

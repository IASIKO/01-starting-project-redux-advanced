import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  items: [],
  quantity: 0,
  // showCart: false,
};

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
      return;
    },
    // toggleCart(state) {
    //   state.showCart = !state.showCart;
    // },
    addToCart(state, action) {
      // state.quantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++ 
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      state.quantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
        // existingItem.totalPrice = existingItem.totalPrice - existingItem.price

      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

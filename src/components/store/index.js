import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from './product'
import uiSlice from './ui'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    ui: uiSlice.reducer
  },
});

export default store;

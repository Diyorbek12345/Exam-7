import { createSlice } from "@reduxjs/toolkit";
// import { cartNumber } from "../layout/header/header";

const initialState = {
  cart: [],
  quantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCard: (state, action) => {
      const find = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cart.push(action.payload);
      }
      // cartNumber();
    },
    INCREMENT: (state, action) => {
      // state.user.cart.map((item) => {
      //   if (item.id === action.payload) {
      //     item.price = 500595959595 ;
      //     console.log(item.price);
      //   }
      // });
      // state.user.quantity += 1;
      // state.user.card[action.payload - 1].price = 500595959595 ;

      console.log(state.user.cart);
    },

    DECREMENT: (state) => {
      state.quantity -= 1;

      // console.log(state.quantity);
    },
  },
});

export const { AddCard, INCREMENT, DECREMENT } = cartSlice.actions;

export default cartSlice.reducer;

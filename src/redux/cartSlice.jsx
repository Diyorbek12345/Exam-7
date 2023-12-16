// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import { cartNumber } from "../layout/header/header";

// const initialState = {
//   cart: [],
//   quantity: 0,
//   totalPrice: 0,
//   msg: "",
//   user: "",
//   token: "",
//   loading: false,
//   error: "",
// };

// export const singUpUser = createAsyncThunk("signupuser", async (body) => {
//   const res = await fetch("ddddddddddd", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// });
// export const LoginUser = createAsyncThunk("loginuser", async (body) => {
//   const res = await fetch("https://fakestoreapi.com/auth/login", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// });

// export const cartSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     AddCard: (state, action) => {
//       const find = state.cart.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       if (find >= 0) {
//         state.cart[find].quantity += 1;
//       } else {
//         const tempvar = { ...action.payload, quantity: 1 };
//         state.cart.push(action.payload);
//       }
//       // cartNumber();
//     },
//     INCREMENT: (state, action) => {
//       state.quantity += 1;
//     },

//     DECREMENT: (state) => {
//       state.quantity -= 1;

//       // console.log(state.quantity);
//     },
//     addToken: (state, action) => {
//       state.token = localStorage.getItem("token");
//     },
//     addUser: (state, action) => {
//       state.user = localStorage.getItem("user");
//     },
//     logout: (state, action) => {
//       state.token = null
//       localStorage.clear()
//     },
//   },

//   extraReducers: {
//     //sign in
//     [LoginUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [LoginUser.fulfilled]: (
//       state,
//       { payload: { error, msg, token, user } }
//     ) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//         state.token = token;
//         state.user = user;

//         localStorage.setItem("msg", msg);
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));
//       }
//     },
//     [LoginUser.rejected]: (state, action) => {
//       state.loading = true;
//     },

//     //sign up
//     [singUpUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [singUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//       }
//     },
//     [singUpUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//   },
// });

// export const { AddCard, INCREMENT, DECREMENT, addToken, addUser, logout } = cartSlice.actions;

// export default cartSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  totalPrice: 0,
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const singUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("ddddddddddd", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

export const LoginUser = createAsyncThunk("loginuser", async (body) => {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

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
        state.cart.push(tempvar);
      }
      // cartNumber();
    },
    INCREMENT: (state, action) => {
      state.quantity += 1;
    },
    DECREMENT: (state) => {
      state.quantity -= 1;
      // console.log(state.quantity);
    },
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { error, msg, token, user } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
          state.token = token;
          state.user = user;
          localStorage.setItem("msg", msg);
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
      .addCase(LoginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(singUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(singUpUser.fulfilled, (state, action) => {
        state.loading = false;
        const { error, msg } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      })
      .addCase(singUpUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { AddCard, INCREMENT, DECREMENT, addToken, addUser, logout } =
  cartSlice.actions;

export default cartSlice.reducer;

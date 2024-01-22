import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { REMOVE_ITEM } from "./actions";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
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
    },
     increase: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity++;
      }
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

      // .addCase(deleteSkill.pending, (state) => {
      //   state.btnLoading = true;
      // })

      // .addCase((deleteskill, state, { payload }) => {
      //   state.skills = state.skills.filter((el) => el.id !== payload);
      // })
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

export const {
  AddCard,
  increase,
  decrease,
  removeItem,
  addToken,
  addUser,
  logout,
} = cartSlice.actions;

export default cartSlice.reducer;

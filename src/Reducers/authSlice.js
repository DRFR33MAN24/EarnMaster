import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {login, register} from '../../api/stockService';

export const login = createAsyncThunk(
  'auth/login',
  async (loginInfo, thunkAPI) => {
    const response = await login(loginInfo);
    thunkAPI.dispatch(setUser(response));
    //console.log(response);
    return response;
  },
);
export const register = createAsyncThunk(
  'auth/login',
  async (registerInfo, thunkAPI) => {
    const response = await register(registerInfo);
    thunkAPI.dispatch(setUser(response));
    //console.log(response);
    return response;
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: '',
      email: '',
      country: '',
      profileImg: '',
    },

    status: 'idle',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    extraReducers: builder => {
      builder
        .addCase(login.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {})
        .addCase(register.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(register.fulfilled, (state, action) => {});
    },
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default authSlice.reducer;

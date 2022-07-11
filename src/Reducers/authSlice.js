import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {_login, _register} from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  try {
    await AsyncStorage.setItem('@jwt_token', value);
  } catch (e) {
    // saving error
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@jwt_token');
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};

export const login = createAsyncThunk(
  'auth/login',
  async (loginInfo, thunkAPI) => {
    try {
      const response = await _login(loginInfo);
      thunkAPI.dispatch(setUser(response));
    } catch (error) {
      if (error.code === 'User not found') {
        // user cancelled the login flow
      } else if (error.code === 'Incorrect password') {
        // operation (e.g. sign in) is in progress already
      } else {
        console.log(error);
      }
    }
    //console.log(response);
    return response;
  },
);
export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (loginInfo, thunkAPI) => {
    const response = await _loginGoogle(loginInfo);
    thunkAPI.dispatch(setUser(response));
    //console.log(response);
    return response;
  },
);
export const register = createAsyncThunk(
  'auth/login',
  async (registerInfo, thunkAPI) => {
    const response = await _register(registerInfo);
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
    errors: {},
    status: 'idle',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      storeToken(action.payload.token);
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
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
        .addCase(register.fulfilled, (state, action) => {})
        .addCase(loginGoogle.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(loginGoogle.fulfilled, (state, action) => {});
    },
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default authSlice.reducer;

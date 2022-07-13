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
      if (!error.code) {
        thunkAPI.dispatch(setErrors({code: 0, msg: 'Unknown error occurred'}));
      } else {
        thunkAPI.dispatch(setErrors(error));
      }
    }
  },
);
export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (loginInfo, thunkAPI) => {
    try {
      const response = await _loginGoogle(loginInfo);
      thunkAPI.dispatch(setUser(response));
    } catch (error) {
      if (!error.code) {
        thunkAPI.dispatch(setErrors({code: 0, msg: 'Unknown error occurred'}));
      } else {
        thunkAPI.dispatch(setErrors(error));
      }
    }
  },
);
export const register = createAsyncThunk(
  'auth/register',
  async (registerInfo, thunkAPI) => {
    try {
      const response = await _register(registerInfo);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    errors: {},
    status: 'idle',
  },
  reducers: {
    setUser: (state, action) => {
      console.log('action payload', action.payload);
      state.user = action.payload;
      // storeToken(action.payload.token);
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    logout: (state, action) => {
      state.user = {};
    },
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
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'idle';
        storeToken(action.payload.token);
      })
      .addCase(loginGoogle.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {setErrors, setUser, logout} = authSlice.actions;

export default authSlice.reducer;

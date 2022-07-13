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
  async (loginInfo, {rejectWithValue}) => {
    try {
      const response = await _login(loginInfo);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (loginInfo, {rejectWithValue}) => {
    try {
      const response = await _loginGoogle(loginInfo);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
export const register = createAsyncThunk(
  'auth/register',
  async (registerInfo, {rejectWithValue}) => {
    try {
      const response = await _register(registerInfo);

      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
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
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'idle';
        storeToken(action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {})
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'idle';
        storeToken(action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {})
      .addCase(loginGoogle.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'idle';
        storeToken(action.payload.token);
      })
      .addCase(loginGoogle.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {setErrors, setUser, logout} = authSlice.actions;

export default authSlice.reducer;

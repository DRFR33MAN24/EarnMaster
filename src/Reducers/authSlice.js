import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {_login, _register} from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async value => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('@user');
    const user = JSON.parse(value);
    if (!user.user.id) {
      // value previously stored

      throw 'user not found';
    }

    return user;
  } catch (e) {
    throw e;
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
export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (data, {rejectWithValue}) => {
    try {
      const response = await getUser();
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (data, {rejectWithValue}) => {
    try {
      const response = await storeUser({});
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
    user: undefined,
    errors: {},
    token: undefined,
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
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('login full', action.payload);
        state.user = action.payload.user;
        state.status = 'idle';
        storeUser(action.payload);
      })
      .addCase(login.rejected, (state, action) => {})
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'idle';
        storeUser(action.payload);
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
      .addCase(loginGoogle.rejected, (state, action) => {})
      .addCase(loadUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'idle';
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.user = {};
        state.token = '';
      })
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.token = '';
        state.status = 'idle';
      })
      .addCase(logout.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {setErrors, setUser} = authSlice.actions;

export default authSlice.reducer;

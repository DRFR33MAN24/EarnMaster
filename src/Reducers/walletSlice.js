import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {_getTransactions, _submitPayment} from '../api/walletService';
import {getUser} from './authSlice';
export const fetchTransactions = createAsyncThunk(
  'wallet/fetchTransactions',
  async (offset, thunkAPI) => {
    const user = await getUser();
    const response = await _getTransactions({
      offset: offset,
      token: user.token,
    });

    //console.log(response);
    return response;
  },
);
export const submitPayment = createAsyncThunk(
  'wallet/submitPayment',
  async (paymentDetails, thunkAPI) => {
    const user = await getUser();
    const response = await _submitPayment({
      paymentDetails: paymentDetails,
      token: user.token,
    });

    //console.log(response);
    return response;
  },
);
const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    transactions: [],
    total_transactions: 0,
    offset: 0,
    status: 'idle',
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.total_transactions = action.payload.length;
      })
      .addCase(submitPayment.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(submitPayment.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.total_transactions = action.payload.length;
      });
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default walletSlice.reducer;

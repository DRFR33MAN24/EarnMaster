import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {_getOffers} from '../api/offersService';

export const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  async (code, thunkAPI) => {
    const response = await getOffers(offset);
    thunkAPI.dispatch(setOffers(response));
    //console.log(response);
    return response;
  },
);

const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    total_offers: 0,
    status: 'idle',
  },
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOffers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default offersSlice.reducer;

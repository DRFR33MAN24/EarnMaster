import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {_getNotifications} from '../api/notificationService';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (offset, thunkAPI) => {
    const user = await getUser();
    const response = await _getNotifications({
      offset: offset,
      token: user.token,
    });

    //console.log(response);
    return response;
  },
);
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    total_notifications: 0,
    offset: 0,
    status: 'idle',
  },
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotifications.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload.rows;
        state.total_notifications = action.payload.count;
      });
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default notificationsSlice.reducer;

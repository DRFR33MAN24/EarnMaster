import {configureStore} from '@reduxjs/toolkit';
import offersReducers from '../src/Reducers/offersSlice';
import authReducers from '../src/Reducers/authSlice';
import notificationsReducers from '../src/Reducers/notificationSlice';
import walletReducers from '../src/Reducers/walletSlice';

export default configureStore({
  reducer: {
    offers: offersReducers,
    auth: authReducers,
    notifications: notificationsReducers,
    wallet: walletReducers,
  },
});

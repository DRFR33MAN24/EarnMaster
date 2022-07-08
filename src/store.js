import {configureStore} from '@reduxjs/toolkit';
import offersReducers from '../src/Reducers/offersSlice';
import authReducers from '../src/Reducers/authSlice';
import notificationsReducers from '../src/Reducers/notificationSlice';

export default configureStore({
  reducer: {
    offers: offersReducers,
    auth: authReducers,
    notifications: notificationsReducers,
  },
});

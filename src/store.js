import {configureStore} from '@reduxjs/toolkit';
import offersReducers from '../src/Reducers/cartSlice';
// import stockReducer from '../src/Reducers/stockReducer';

export default configureStore({
  reducer: {
    offers: offersReducers,
    // stock: stockReducer,
  },
});

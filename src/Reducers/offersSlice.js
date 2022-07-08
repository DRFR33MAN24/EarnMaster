import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getOffers} from '../../api/stockService';

export const fetchOffers = createAsyncThunk(
  'offers/fetchOffers',
  async (code, thunkAPI) => {
    const response = await getOffers(offset);
    thunkAPI.dispatch(setOffers(response));
    //console.log(response);
    return response;
  },
);

// export const searchItemByName = createAsyncThunk(
//   'cart/searchItemByName',
//   async name => {
//     const response = await getProductByName(name);
//     //console.log(response);
//     return response;
//   },
// );

// const reduceCartItems = items => {
//   let newCartItems = [];
//   items.map(item => {
//     // is Item already in cart
//     let foundItem = newCartItems.findIndex(newItem => newItem.id === item.id);
//     console.log(foundItem);
//     if (foundItem !== -1) {
//       newCartItems[foundItem].qty += 1;
//     } else {
//       newCartItems.push(item);
//     }
//   });
//   return newCartItems;
// };

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
    // addCartItem: (state, action) => {
    //   let foundItemIndex = state.cartItems.findIndex(
    //     i => i.id === action.payload.id,
    //   );

    //   if (foundItemIndex > -1) {
    //     if (state.cartItems[foundItemIndex].qty < action.payload.qty) {
    //       state.cartItems[foundItemIndex].qty += 1;
    //     } else {
    //       console.log('No More Items');
    //     }
    //   } else {
    //     const itemMod = Object.assign({}, action.payload, {
    //       qty: 1,
    //     });
    //     let newCartItems = [...state.cartItems, itemMod];
    //     state.cartItems = reduceCartItems(newCartItems);
    //   }

    //   //let newCartItems = [...state.cartItems, action.payload];
    // },
    // decreaseItemQty: (state, action) => {
    //   //find if item exitsts
    //   //if qty > 0 decrease qty
    //   //else remove item
    //   const foundItemIndex = state.cartItems.findIndex(
    //     item => item.id === action.payload.id,
    //   );
    //   if (foundItemIndex !== -1) {
    //     const item = state.cartItems[foundItemIndex];
    //     if (item.qty > 1) {
    //       state.cartItems[foundItemIndex].qty -= 1;
    //     } else {
    //       state.cartItems.splice(foundItemIndex, 1);
    //     }
    //   }
    // },
    // removeCartItem: (state, action) => {
    //   const foundItemIndex = state.cartItems.findIndex(
    //     item => item.id === action.payload.id,
    //   );
    //   if (foundItemIndex !== -1) {
    //     state.cartItems.splice(foundItemIndex, 1);
    //   }
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOffers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {})
      .addCase(searchItemByName.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchItemByName.fulfilled, (state, action) => {
        //console.log('payload', action.payload);
        state.searchItems = [...action.payload];
        state.status = 'loading';
      });
  },
});

// Action creators are generated for each case reducer function
//export const {addCartItem, removeCartItem, decreaseItemQty} = cartSlice.actions;

export default offersSlice.reducer;

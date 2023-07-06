/*eslint-disable*/
import {configureStore} from '@reduxjs/toolkit';
import cryptoReducer from './features/moneySlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;

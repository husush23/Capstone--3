/*eslint-disable*/
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const url =
  'https://financialmodelingprep.com/api/v3/fx?apikey=1e4ca2de691b5135d8cf2ccac0033160';

const initialState = {
  currencies: [],
  isLoading: false,
  error: '',
};

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async thunkAPI => {
    try {
      const request = await axios(url);
      return await request.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

const moneySlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCrypto.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchCrypto.fulfilled, (state, action) => ({
      ...state,
      currencies: action.payload,
      isLoading: false,
    }));
    builder.addCase(fetchCrypto.rejected, (state, action) => ({
      ...state,
      error: action.error.message,
      isLoading: false,
    }));
  },
});

export default moneySlice.reducer;

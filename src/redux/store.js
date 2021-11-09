import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactions/transactions.reducer';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

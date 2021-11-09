import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as transactionsActions from './transactions.actions';

const items = createReducer([], {
  [transactionsActions.fetchTransactionsSuccess]: (_, { payload }) =>
    payload.transactions,

  [transactionsActions.addTransactionSuccess]: (state, { payload }) => [
    payload.result,
    ...state,
  ],

  [transactionsActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(transaction => transaction._id !== payload),
});

const isLoadingAction = action =>
  action.type.startsWith('transactions') && action.type.endsWith('Request');

const isEndLoadingAction = action =>
  action.type.startsWith('transactions') &&
  (action.type.endsWith('Success') || action.type.endsWith('Error'));

const loading = createReducer(false, builder => {
  builder
    .addMatcher(isLoadingAction, () => true)
    .addMatcher(isEndLoadingAction, () => false);
});

export const transactionsReducer = combineReducers({
  items,
  loading,
});

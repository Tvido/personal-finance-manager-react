import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.transactions.loading;

export const getFilter = state => state.transactions.filter;

export const getAllTransactions = state => state.transactions.items;

export const getVisibleTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return transactions.filter(({ item }) =>
      item.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getIncomeSum = createSelector([getAllTransactions], transactions =>
  transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
);

export const getTransactionById = id =>
  createSelector([getAllTransactions], transactions =>
    transactions.find(transaction => transaction._id === id),
  );

import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.transactions.loading;

export const getFilter = state => state.transactions.filter;

export const getAllTransactions = state => state.transactions.items;

export const getTotalTransactionsCount = state => {
  const transactions = getAllTransactions(state);

  return transactions.length;
};

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

// export default {
//   getLoading,
//   getFilter,
//   getVisibleTransactions,
//   getTotalTransactionsCount,
// };

////

// import { createSelector } from '@reduxjs/toolkit';
// import { categoryTypes } from '../../helpers/constants';

// // export const getLoading = (state) => state.transactions.loading;
// // export const getFilter = (state) => state.transactions.filter;

// export const getAllTransactions = state => state.transactions.items;

// export const getTransactionsByCategoryId = id =>
//   createSelector([getAllTransactions], transactions =>
//     transactions.find(transaction => transaction.category._id === id),
//   );

// export const getTransactionById = id =>
//   createSelector([getAllTransactions], transactions =>
//     transactions.find(transaction => transaction._id === id),
//   );

// export const getSummary = state => state.transactions.summary;

// export const getYear = state => state.transactions.year;

// export const getMonth = state => state.transactions.month;

// // export const getSummaryExpense = createSelector(
// // 	[getSummary],
// // 	(transactions) => transactions.filter(transaction => )
// // )

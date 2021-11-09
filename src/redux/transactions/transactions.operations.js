import axios from 'axios';
import { transactionsActions } from './index';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const fetchTransactions = () => async dispatch => {
  dispatch(transactionsActions.fetchTransactionsRequest());
  try {
    const { data } = await axios.get(`/api/transactions`);
    dispatch(transactionsActions.fetchTransactionsSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.fetchTransactionsError(error.message));
    console.log(error.message);
  }
};

export const addTransaction =
  ({ datetime, category, operationType, amount, description }) =>
  async dispatch => {
    const transaction = {
      datetime,
      category,
      operationType,
      amount,
      description,
    };

    dispatch(transactionsActions.addTransactionRequest());

    try {
      const { data } = await axios.post('/api/transactions', transaction);
      dispatch(transactionsActions.addTransactionSuccess(data));
    } catch (error) {
      dispatch(transactionsActions.addTransactionError(error.message));
    }
  };

export const deleteTransaction = transactionId => async dispatch => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/api/transactions/${transactionId}`);
    dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(transactionsActions.deleteTransactionError(error.message));
  }
};

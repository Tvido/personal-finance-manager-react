import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TransactionsTable from '../components/TransactionsTable/TransactionsTable';

import { transactionsOperations } from '../redux/transactions';

const Transactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <TransactionsTable />
    </>
  );
};

export default Transactions;

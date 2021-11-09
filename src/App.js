import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar/AppBar';

import { transactionsOperations } from './redux/transactions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <AppBar />
    </>
  );
};

export default App;

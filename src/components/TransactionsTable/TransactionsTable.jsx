import React, { useCallback, useSelector } from "react";
import { useDispatch } from "react-redux";
// import db from './db.json'
import moment from "moment";

import {
  transactionsOperations,
  transactionsSelectors
} from "../../redux/transactions";

export const TransactionsTable = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    transactionsSelectors.getAllTransactions()
  )


  const onDeleteTransaction = useCallback(
    id => dispatch(transactionsOperations.deleteTransaction(id)),
    [dispatch],
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Категорiя</th>
            <th>Тип операції</th>
            <th>Сума</th>
            <th>Дата</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ _id, category, operationType, amount, datetime, description }) => (
            <tr key={_id}>
              <td>{category}</td>
              <td>{operationType}</td>
              <td>{amount}</td>
              <td>{moment(datetime).format("DD.MM.YYYY")}</td>
              <td>{description}</td>
              <td>
                <button type="button" onClick={() => onDeleteTransaction(_id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};



export default TransactionsTable;
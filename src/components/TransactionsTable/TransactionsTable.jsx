import React, { useCallback  } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  transactionsOperations,
  transactionsSelectors
} from "../../redux/transactions";


export const TransactionsTable = () => {
  const dispatch = useDispatch();


  const transactions = useSelector(
    transactionsSelectors.getAllTransactions
  )


  const onDeleteTransaction = useCallback(
    id => dispatch(transactionsOperations.deleteTransaction(id)),
    [dispatch],
  );

  return (
    <div className="container">
      <table className="table">
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
                <button type="button"
                  // onClick={() => {}}
                  onClick={() => onDeleteTransaction(_id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default TransactionsTable;
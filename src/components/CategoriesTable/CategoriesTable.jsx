import React, { useCallback  } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  transactionsOperations,
  transactionsSelectors,
} from "../../redux/transactions";


export const CategoriesTable = () => {
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
            <th>Назва</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ _id, category, description }) => (
            <tr key={_id}>
              <td>{category}</td>
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



export default CategoriesTable;
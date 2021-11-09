import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { transactionsOperations } from '../../redux/transactions';

const AddTransaction = () => {
  const dispatch = useDispatch();

  const [datetime, setDatetime] = useState(new Date());
  const [category, setCategory] = useState("");
  const [operationType, setOperationType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget);

    switch (name) {
      case 'category':
        setCategory(value);
        break;

      case 'operationType':
        setOperationType(value);
        break;

      case 'amount':
        setAmount(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        console.warn(`Тип поля ${name} не валідний`);
    }
  }, []);


  const reset = () => {
    setCategory("");
    setOperationType("");
    setAmount("");
    setDescription("");
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        transactionsOperations.addTransaction({
          datetime,
          category,
          operationType,
          amount,
          description
        })
      );
      reset();
    },
    [dispatch,
      datetime,
      category,
      operationType,
      amount,
      description]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="category"
          value={category}
          onChange={handleChange}
          placeholder="Категорія"
          autoComplete="off"
        />
        <input type="text"
          name="operationType"
          value={operationType}
          onChange={handleChange}
          placeholder="Тип операції"
          autoComplete="off"
        />
        <input
          name="amount"
          value={amount}
          type="number"
          max="1000000"
          min="1"
          onChange={handleChange}
          placeholder="00.00"
          pattern="\d+(.\d{2})?"
          autoComplete="off"
        />
        <DatePicker
          selected={datetime}
          onChange={setDatetime}
          dateFormat="dd.MM.yyyy"
          customInput={
            <input type="text"
            />
          }
        />
        <input type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Опис"
          autoComplete="off"
        />



        <button type="submit">
          Додати
        </button>
      </form>
    </div>
  )
}

export default AddTransaction;

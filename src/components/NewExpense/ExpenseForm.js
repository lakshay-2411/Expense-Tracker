import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Another way of storing state using one state only for all
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
    */

    // If the state update depends on the previous state, use this approach
    /*
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    })
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    */

    // If the state update depends on the previous state, use this approach
    /*
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: event.target.value};
    })
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    */

    // If the state update depends on the previous state, use this approach
    /*
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value};
    })
    */
  };

  // Creating a shared handler function for all inputs
  /*
  const inputChangeHandler = (identifier, value) => {
    if(identifier === 'title'){
      setEnteredTitle(value);
    } else if(identifier === 'amount'){
      setEnteredAmount(value);
    } else{
      setEnteredDate(value);
    }
  }
  */

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseDate);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input type="date" min="2023-01-01" max="2025-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
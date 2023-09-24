import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //OVO JE DRUGI KORAK
  //ocekujemo neki props, jer smo u newExpenses upisali funkciju onSaveExpenseData

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({ //userInput je vrednost koju korisnik upisuje, a setUserInput funkcija
  //   enteredTitle: "",
  //   EnteredAmount: "",
  //   eneteredDate: "",
  // }); //Umesto ovoga iznad

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //ovo koristmo jer iz eventa vadimo podatke, tj event je svaki put kad ukucamo slovo i trazimo koje je to slovo tj rec
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    //   //ovo uzimamo ceo objekt userInput i samo preko Title ispisemo novi uneti title
    // });
    // setUserInput((prevState) => { //prevState je vrednost od ranije
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value, //objasnjenje u title
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value, //objasnjenje u title
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //built into JavaScript, prevent request been sent by clicking submit button, so our page doesn't reload again so we can edit with javaScript

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //convert date string into date object
    };
    props.onSaveExpenseData(expenseData); //Ovde koristimo funkciju iz newExpense, a koju smo poslali uz pomoc props i saljemo expenseData kao argument u NewExpense
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019 - 01 - 01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

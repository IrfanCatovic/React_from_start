import React, { useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses); //get access to expenses and setExpenses updating function

  //-------------------------------------
  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); //pozivamo da bismo napravili array koji ukljucuje novi expense item
    //uzimamo novi expense i skupljamo prosli array ...expenses
    //--------------

    //radicemo ovaj nacin jer zavisimo od proslog state i array da ne bi doslo do bagova
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

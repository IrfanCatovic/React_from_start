import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  //Ovaj props nam dolazi iz APP, da primimo funkciju onAddExpense

  //OVO JE SVE PRVI KORAK
  //kao parametar ocekujemo podatke iz ExpenseForm kada smo ih sacuvali
  //cuvamo sve podatke i dodajemo ID key

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //Ovde pozivamo funkciju iz <APP/> i saljemo expenseData u APP
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* Pravimo onSaveExpenseData funkciju koja ce da se dogodi kada je nesto trigeruje
          u ExpenseForm componenti, a u ovom slucaju kada pritisne da sacuva podatke */}
    </div>
  );
};
export default NewExpense;

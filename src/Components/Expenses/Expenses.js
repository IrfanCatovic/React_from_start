import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.lenght == 0 ? (
        <p>No expenses fond.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} //Ovo moramo da radimo jer kad react kreira novi item u listi on osvezi sve iteme koji vec postoje i upise novi, a ovako
            //ima svoj ID i onda zna koji stoji gde i ne gubimo na performansa, ne mora da refresuje ceo array nego samo doda novi u listu
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}

      {/* .MAP je funkcija koja uzima svaki element datog niza
           primamo svaki element iz APP i od svakog pravimo ExpenseItem componentu*
           Novi code sa .map funkcijom koju sam napisao menja ceo code koji se nalazi ispod/}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;

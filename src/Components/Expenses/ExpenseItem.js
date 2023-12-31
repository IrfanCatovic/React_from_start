import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      {/* Ovo salje podatke datuma dalje u expenseDate comp, a primilo je iz expenses */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* dodaje event listener na button i smao pokazemo na funkciju ne zovemo je da bi moglo da radi kad pritisnemo dugme, a ne kad je ucita*/}
    </Card>
  );
};

export default ExpenseItem;

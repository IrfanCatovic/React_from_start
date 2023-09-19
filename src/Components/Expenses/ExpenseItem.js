import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //moramo ovako jher useState vraca niz i moramo da koristimo destrukciju da odvojimo,
  // prvi nam vraca ono sto smo poslali, a drugi je promenjen

  const clickHandler = () => {
    setTitle("Updated");
    //Da bi ovo radilo moramo nekako ovu funckiju da pozovemo
    //Da bismo rekli da renderuje opet stranicu posle klika moramo da ubacimo {useState}
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      {/* Ovo salje podatke datuma dalje u expenseDate comp, a primilo je iz expenses */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      {/* dodaje event listener na button i smao pokazemo na funkciju ne zovemo je da bi moglo da radi kad pritisnemo dugme, a ne kad je ucita*/}
    </Card>
  );
};

export default ExpenseItem;

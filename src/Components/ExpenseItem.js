import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  {
    /* u zagradi ('Prvo se navodi koji jezik, {objekat gde konfigurises kako bi trebalo da se prikaze u kom formatu }) */
  }
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        {/* u zagradi ('Prvo se navodi koji jezik, {objekat gde konfigurises kako bi trebalo da se prikaze u kom formatu }) */}
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";
function ExpensesList(props) {
  if (props.newList.length === 0) {
    return <h2 className="expenses-list__fallback">Not found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.newList.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;

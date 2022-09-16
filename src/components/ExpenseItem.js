import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item ">
      <div>date</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$234.56</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

import React from "react";

const IncomeExpenses = ({ income, Expense }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${Expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

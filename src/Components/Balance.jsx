import React from "react";

const Balance = ({ income, Expense }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${income - Expense}</h1>
    </>
  );
};

export default Balance;

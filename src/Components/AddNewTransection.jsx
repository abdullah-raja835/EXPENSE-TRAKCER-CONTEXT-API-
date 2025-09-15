import React, { useState } from "react";

const AddNewTransection = ({
  description,
  setDescription,
  money,
  setMoney,
  setTransections,
  transections,
}) => {
  function addTransection(e) {
    e.preventDefault();
    setTransections([
      ...transections,
      {
        id: transections.length,
        text: description,
        amount: Number(money),
      },
    ]);
    setDescription("");
    setMoney("");
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            onChange={(e) => setMoney(e.target.value)}
            value={money}
          />
        </div>
        <button className="btn" onClick={addTransection}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddNewTransection;

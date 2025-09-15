import React from "react";

const Transections = ({ transections, setTransections }) => {
  function deleteTransection(id) {
    setTransections(
      transections.filter((t) => {
        return t.id !== id;
      })
    );
  }
  return (
    <>
      <h3>History</h3>
      {transections.map((t) => {
        return (
          <ul id="list" className="list" key={t.id}>
            <li className={`${t.amount > 0 ? "plus" : "minus"}`}>
              {t.text}
              <span>{t.amount}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTransection(t.id)}
              >
                x
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Transections;

import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context/ContextData";
const Transections = () => {
  function deleteTransection(id) {
    setTransections(
      transections.filter((t) => {
        return t.id !== id;
      })
    );
  }
  const { transections, setTransections } = useContext(MyContext);
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

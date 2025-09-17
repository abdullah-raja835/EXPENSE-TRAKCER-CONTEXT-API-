import React, { createContext, useState } from "react";

// const initialState = {
//   transections: [
//     {
//       id: 1,
//       text: "Milk",
//       amount: 12,
//     },
//     {
//       id: 2,
//       text: "Juice",
//       amount: -12,
//     },
//     {
//       id: 3,
//       text: "Eggs",
//       amount: 44,
//     },
//   ],
// };

export const MyContext = createContext();
const ContextData = ({ children }) => {
  const [transections, setTransections] = useState([]);

  const [description, setDescription] = useState("");
  const [money, setMoney] = useState(0);
  return (
    <MyContext.Provider
      value={{
        transections,
        setTransections,
        description,
        setDescription,
        money,
        setMoney,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextData;

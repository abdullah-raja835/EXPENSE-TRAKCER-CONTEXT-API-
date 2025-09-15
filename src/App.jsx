import { useState } from "react";
import AddNewTransection from "./Components/AddNewTransection";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import Transections from "./Components/Transections";

function App() {
  const [transections, setTransections] = useState([]);
  let amount = transections.filter((t) => {
    return t.amount;
  });

  let positives = amount.filter((t) => {
    return t.amount > 0;
  });
  let Negatives = amount.filter((t) => {
    return t.amount < 0;
  });
  let income = positives.reduce((acc, curr) => acc + curr.amount, 0);
  let Expense = Math.abs(Negatives.reduce((acc, curr) => acc + curr.amount, 0));
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  return (
    <div>
      <Header />
      <div className="container">
        <Balance income={income} Expense={Expense} />
        <IncomeExpenses income={income} Expense={Expense} />
        <Transections
          transections={transections}
          setTransections={setTransections}
        />
        <AddNewTransection
          transections={transections}
          setTransections={setTransections}
          description={description}
          setDescription={setDescription}
          money={money}
          setMoney={setMoney}
        />
      </div>
    </div>
  );
}

export default App;

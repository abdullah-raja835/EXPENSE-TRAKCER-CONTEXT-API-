import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextData from "./Context/ContextData.jsx";

createRoot(document.getElementById("root")).render(
  <ContextData>
    <App />
  </ContextData>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BagProvider } from "./context/BagContext";
import { UserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BagProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BagProvider>
  </React.StrictMode>
);

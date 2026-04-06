import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./components/context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <AppContextProvider>
          <App />
      </AppContextProvider>
  </BrowserRouter>
);

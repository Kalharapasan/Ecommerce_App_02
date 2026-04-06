import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./components/context/AppContext.jsx";
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <AppContextProvider>
          <App />
      </AppContextProvider>
  </BrowserRouter>
);

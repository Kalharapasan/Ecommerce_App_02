import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./components/context/AppContext.jsx";
import { createRoot } from 'react-dom/client'
import {ClerkProvider} from '@clerk/clerk-react'

const PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Puvblishable key')
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishablekey={PUBLISHABLE_KEY}>
     <BrowserRouter>
      <AppContextProvider>
          <App />
      </AppContextProvider>
    </BrowserRouter>
  </ClerkProvider>
 
);

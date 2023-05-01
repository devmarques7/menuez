import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import GlobalStyles from "./styles/GlobalStyles";
import { MyRoutes } from "./routers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyles />
        <MyRoutes />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

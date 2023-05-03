import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import GlobalStyles from "./styles/GlobalStyles";
import { MyRoutes } from "./routers";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyles />
        <App>
          <MyRoutes />
        </App>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

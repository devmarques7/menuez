import App from "../App";

import { Route, Routes } from "react-router-dom";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};
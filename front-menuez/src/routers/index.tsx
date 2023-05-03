import { Route, Routes } from "react-router-dom";
import { Ticktes } from "../components/pages/Tickets";
import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Payment } from "../components/pages/Payment";
import { Sucess } from "../components/pages/Sucess";
import WaitPage from "../components/pages/Wait";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tickets/:id" element={<Ticktes />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/payment/sucess" element={<Sucess />}></Route>
      <Route path="/wait" element={<WaitPage />}></Route>
    </Routes>
  );
};

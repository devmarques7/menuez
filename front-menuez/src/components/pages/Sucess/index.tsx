import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { StyledContainer } from "./style";
import { HiTicket } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";

export const Sucess = () => {
  const { cart, setCart, navigate, events, amount, setAmount } =
    useContext(AppContext);

  useEffect(() => {
    console.log(cart);
    document.querySelector("body")!.style.overflow = "hidden";
    setCart([]);
  }, []);

  const handleClose = () => {
    navigate("/");
    document.querySelector("body")!.style.overflow = "scroll";
  };

  return (
    <StyledContainer>
      <nav className="nav">
        <HiTicket className="icon ticket" onClick={handleClose} />
        <CgClose className="icon close" onClick={handleClose} />
      </nav>

      <div className="empty cart">
        <RiShoppingCartLine className="empty-icon" />
        <h3 className="empty description">Payment Done</h3>
      </div>
    </StyledContainer>
  );
};

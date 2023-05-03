import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { StyledContainer } from "./style";
import { HiTicket } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { Ticktes } from "../Tickets";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, setCart, navigate, events, amount, setAmount } =
    useContext(AppContext);

  const [name, setName] = useState("");

  useEffect(() => {
    console.log(cart);
    document.querySelector("body")!.style.overflow = "hidden";
    handleAmount();
    handleInfo();
  }, [name]);

  const handleClose = () => {
    navigate("/");
    document.querySelector("body")!.style.overflow = "scroll";
  };

  const handleAmount = () => {
    const totalAmount = cart.reduce((total, ticket) => {
      return total + ticket.price;
    }, 0);
    setAmount(totalAmount);
  };

  const handleInfo = () => {
    if (name) {
      const event: string = events.find(
        (event) => event.id === cart[0].event_id
      )!.name;

      setName(event);
    }
  };

  return (
    <StyledContainer>
      <nav className="nav">
        <HiTicket className="icon ticket" onClick={handleClose} />
        <CgClose className="icon close" onClick={handleClose} />
      </nav>
      {cart.length > 0 ? (
        <div className="container receipt">
          <div className="info receipt">
            <h2 className="section title">RECEIPTS</h2>
            <div className="info over">
              <h3 className="title"> Event Name</h3>
              <span className="description">{name}</span>

              <h3 className="title">Amount of Tickets</h3>
              <span className="description">{cart.length}</span>
            </div>
            <div className="info sub">
              <h3 className="title">Total</h3>
              <span className="description">€ {amount},00</span>
            </div>
            <div className="payment">
              <Link className="title" to={"/payment"}>{`Payment >>`}</Link>
            </div>
          </div>
          <div className="section tickets">
            <h2 className="section title">TICKETS</h2>
            <ul className="cart receipt">
              {cart.map((ticket) => {
                return (
                  <li className="receipt">
                    <div className="selector"></div>
                    <div className="column">
                      <div className="info">
                        <h3 className="title">{name}</h3>

                        <span className="type">
                          {ticket.ticket_type.toLocaleUpperCase()}
                        </span>
                      </div>
                      <span className="id">{ticket.id}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="empty cart">
          <RiShoppingCartLine className="empty-icon" />
          <h3 className="empty description"> EMPTY CART</h3>
        </div>
      )}
    </StyledContainer>
  );
};

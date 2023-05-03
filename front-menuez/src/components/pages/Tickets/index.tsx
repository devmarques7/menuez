import React, { useContext, useEffect, useState } from "react";
import { Card, StyledContainer } from "./style";
import { AppContext, ITicket } from "../../../contexts/AppContext";

import { HiOutlineTicket } from "react-icons/hi/";
import Container from "../../utils/Container";

interface IAvailable {
  standard: number;
  plus: number;
  vip: number;
}

export const Ticktes = () => {
  const { eventTicket, cart, setCart } = useContext(AppContext);
  const [ticketsCounter, setTicketsCounter] = useState<IAvailable>({
    standard: 0,
    vip: 0,
    plus: 0,
  });

  const handleAvailableTickets = () => {
    if (eventTicket.tickets) {
      const tickets = eventTicket.tickets.reduce(
        (acc: any, ticket: any) => ({
          ...acc,
          [ticket.ticket_type]: acc[ticket.ticket_type] + ticket.available,
        }),
        { ...ticketsCounter }
      );

      setTicketsCounter(tickets);
    }
  };

  const handleTicketsCounter = (event: any) => {
    const soldOut = event.target.querySelector("span");
    const key = event.target.closest("li").id as keyof IAvailable;
    if (ticketsCounter[key] > 0) {
      setTicketsCounter({
        ...ticketsCounter,
        [key]: ticketsCounter[key] - 1,
      });
      handleCart(key);
    }
  };

  const handleCart = (key: string) => {
    const ticket = eventTicket.tickets.find(
      (ticket) => ticket.ticket_type === key
    );
    setCart([...cart, ticket as ITicket]);
  };

  useEffect(() => {
    handleAvailableTickets();
  }, [eventTicket]);

  const cartInJson = JSON.stringify(cart);
  localStorage.setItem("cart", cartInJson);

  return (
    <Container
      backgroundType="image"
      backgroundSrc={eventTicket.img_cover_event}
    >
      <StyledContainer
        standard={ticketsCounter.standard}
        vip={ticketsCounter.vip}
        plus={ticketsCounter.plus}
      >
        <ul className="container tickets">
          <Card
            className="ticket standard"
            id="standard"
            onClick={(event) => handleTicketsCounter(event)}
          >
            <h3 className="title">Standard</h3>
            {ticketsCounter.standard == 0 && (
              <span className="sold_out">SOLD OUT</span>
            )}

            <img className="img standard" src="/favico.png" />
          </Card>

          <Card
            className="ticket vip"
            id="vip"
            onClick={(event) => handleTicketsCounter(event)}
          >
            <h3 className="title">Vip</h3>
            {ticketsCounter.vip == 0 && (
              <span className="sold_out">SOLD OUT</span>
            )}
            <img className="img vip" src="/favico.png" />
          </Card>
          <Card
            className="ticket plus"
            id="plus"
            onClick={(event) => handleTicketsCounter(event)}
          >
            <h3 className="title">Plus</h3>
            {ticketsCounter.plus == 0 && (
              <span className="sold_out"> SOLD OUT</span>
            )}
            <img className="img plus" src="/favico.png" />
          </Card>
        </ul>
      </StyledContainer>
    </Container>
  );
};

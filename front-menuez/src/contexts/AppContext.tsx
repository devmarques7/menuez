import { ReactNode, createContext, useEffect, useState } from "react";
import menuezApi from "../axios/config";
import { IEvent } from "../interfaces/IEvents";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IAppContext {
  events: IEvent[];
  availableEvents: (link: string) => void;
  eventTicket: IEvent;
  setCart: React.Dispatch<React.SetStateAction<ITicket[]>>;
  cart: ITicket[];
  navigate: NavigateFunction;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  validateLine: (event_id: string) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  queue: number;
  event_id: string;
}

export interface ITicket {
  available: true;
  id: string;
  ticket_type: string;
  event_id: string;
  price: number;
}

interface ContextsProps {
  children: ReactNode;
}

// const ws = new WebSocket("ws://localhost:3000/cable");

export const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: ContextsProps) => {
  const [cart, setCart] = useState<ITicket[]>([]);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [eventTicket, setEventTicket] = useState<IEvent>({} as IEvent);
  const [showModal, setShowModal] = useState(false);
  const [queue, setQueue] = useState(0);
  const [event_id, setEvent_id] = useState("");

  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  // ws.onopen = () => {
  //   console.log("Connection established to WS server");

  //   ws.send(
  //     JSON.stringify({
  //       command: "subscribe",
  //       identifier: JSON.stringify({
  //         id: uuidv4(),
  //         channel: "StoreChannel",
  //       }),
  //     })
  //   );
  // };

  useEffect(() => {
    handleEvents();
    handleQueue();
  }, []);

  const handleEvents = async () => {
    try {
      await menuezApi.get("/events").then((response) => {
        setEvents(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const availableEvents = (link: string) => {
    const event_id = link.split("/")[2];
    setEvent_id(event_id);
    const event = events.filter((event) => event.id === event_id)[0];
    console.log(event.tickets);

    if (event.tickets.length) {
      setEventTicket(event);
      validateLine(event_id);
    }
  };

  const validateLine = (event_id: string) => {
    if (queue > 0) {
      setShowModal(true);
      navigate("/wait");
    } else {
      navigate(`/tickets/${event_id}`);
    }
  };

  const handleQueue = () => {
    //Receive Informations about the sistem
    setQueue(1);

    console.log(queue);
  };

  return (
    <AppContext.Provider
      value={{
        navigate,
        events,
        availableEvents,
        eventTicket,
        cart,
        setCart,
        amount,
        setAmount,
        validateLine,
        setShowModal,
        showModal,
        queue,
        event_id,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

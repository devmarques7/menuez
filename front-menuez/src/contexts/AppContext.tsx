import { ReactNode, createContext, useEffect, useState } from "react";
import menuezApi from "../axios/config";
import { IEvent } from "../interfaces/IEvents";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { consumer } from "../websocket";

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

  const channel = consumer.subscriptions.create("StoreChannel", {
    connected: function () {
      console.log("Connected to StoreChannel");
    },
    disconnected: function () {
      console.log("Disconnected from StoreChannel");
    },
    received: function (data) {
      console.log(`Received data: ${data}`);

      data.forEach((event: any) => {
        console.log(event);
      });
    },

    eventList: function () {
      console.log("Requesting data...");
      this.perform("events");
    },
  });

  useEffect(() => {
    handleEvents();
    handleQueue();
    countDown();
  }, []);

  const handleEvents = async () => {
    channel.eventList();
    try {
      await menuezApi.get("/events").then((response) => {
        setEvents(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const countDown = () => {
    let seconds = 10;
    const intervalId = setInterval(() => {
      seconds--;

      if (seconds <= 0) {
        clearInterval(intervalId);
        onFinished();
      }
    }, 1000);
  };

  const onFinished = () => {
    channel.eventList();
  };
  const availableEvents = (link: string) => {
    const event_id = link.split("/")[2];
    setEvent_id(event_id);
    const event = events.filter((event) => event.id === event_id)[0];

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
    setQueue(0);
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

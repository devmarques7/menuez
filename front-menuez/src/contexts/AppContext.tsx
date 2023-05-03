import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import menuezApi from "../axios/config";
interface IAppContext {
  events: IEvent[];
}

interface ContextsProps {
  children: ReactNode;
}

export interface IEvent {
  id: string;
  name: string;
  location: string;
  open_at: string;
  close_at: string;
  description: string;
  date: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  img_cover_event: string;
  category: string;
  sold_out: boolean;
  owner: {
    id: string;
    name: string;
    email: string;
  };
  tickets: {
    id: string;
    ticket_type: string;
    available: boolean;
  }[];
}

// const ws = new WebSocket("ws://localhost:3000/cable");

export const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: ContextsProps) => {
  const [cart, setCart] = useState([]);
  const [events, setEvents] = useState<IEvent[]>([]);

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

  return (
    <AppContext.Provider value={{ events }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

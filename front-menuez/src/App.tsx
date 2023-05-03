import React, { ReactNode, useContext, useEffect } from "react";

import CarouselServices from "./components/utils/CarouselServices";

import { consumer } from "./websocket";
import { Home } from "./components/pages/Home";
import Nav from "./components/utils/NavBar";
import { AppContext } from "./contexts/AppContext";
import Modal from "./components/utils/Modal";

interface IAppProps {
  children?: ReactNode;
}

function App({ children }: IAppProps) {
  const { setShowModal, showModal } = useContext(AppContext);

  const channel = consumer.subscriptions.create("StoreChannel", {
    connected: function () {
      console.log("Connected to StoreChannel");
    },
    disconnected: function () {
      console.log("Disconnected from StoreChannel");
    },
    received: function (data) {
      console.log(`Received data: ${data}`);
    },
    sendHello: function () {
      console.log("Sending hello...");
      this.perform("hello");
    },

    eventList: function () {
      console.log("Sending hello...");
      this.perform("events");
    },
  });

  useEffect(() => {
    console.log("Estou no app");
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("aqui");
  };

  return (
    <div className="App">
      {/* <button onClick={() => channel.eventList()}>Send Hello</button> */}
      {showModal && (
        <Modal message="Deseja continuar?" onClick={handleCloseModal} />
      )}
      <Nav color={"var(--nav-background)"} />

      {children}
    </div>
  );
}

export default App;

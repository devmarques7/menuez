import React from "react";

import CarouselServices from "./components/CarouselServices";
import Nav from "./components/NavBar";

import { consumer } from "./websocket";

function App() {
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

  return (
    <div className="App">
      {/* {messages.map((msg) => {
        return <p key={msg.id}>{msg.body}</p>;
      })} */}
      <Nav color={"var(--nav-background)"} />
      {/* <button onClick={() => channel.eventList()}>Send Hello</button> */}
      <CarouselServices />
    </div>
  );
}

export default App;

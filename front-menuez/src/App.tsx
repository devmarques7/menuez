import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

const ws = new WebSocket("ws://localhost:3000/cable");

function App() {
  ws.onopen = () => {
    console.log("Connection established to WS server");

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: uuidv4(),
          channel: "StoreConnectedChannel",
        }),
      })
    );
  };

  useEffect(() => {
    // fetchMessage();
  }, []);

  // const fetchMessage = async () => {
  //   const response = await fetch("http://localhost:3000/stores");
  //   const data = await response.json();
  // };

  return (
    <div className="App">
      {/* {messages.map((msg) => {
        return <p key={msg.id}>{msg.body}</p>;
      })} */}
      <Header>
        <h3>Store</h3>
        <button>Buy</button>
      </Header>
    </div>
  );
}

export default App;

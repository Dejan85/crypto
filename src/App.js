import React from "react";

function App() {
  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        event: "subscribe",
        channel: "trades",
        pair: "ETHUSD"
      })
    );
  };

  ws.onmessage = msg => {
    const res = JSON.parse(msg.data);

    console.log(res[1] && res);
  };

  return <div className="App">xad</div>;
}

export default App;

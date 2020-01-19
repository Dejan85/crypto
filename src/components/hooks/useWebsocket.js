import { useState } from "react";
const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
const arr = [];

const useWebsocket = () => {
  const [btcUsd, setBtcUsd] = useState();
  const [ethUsd, setEthUsd] = useState();
  const [eosUsd, setEosUsd] = useState();

  const [btcEur, setBtcEur] = useState();
  const [ethEur, setEthEur] = useState();
  const [eosEur, setEosEur] = useState();

  const getData = () => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "BTCUSD",
          volume: "true"
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "ETHUSD"
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "EOSUSD"
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "BTCEUR"
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "ETHEUR"
        })
      );
      ws.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          pair: "EOSEUR"
        })
      );
    };

    ws.onmessage = msg => {
      const res = JSON.parse(msg.data);

      //   console.log(res);

      res.chanId && arr.length !== 6 && arr.push(res.chanId);

      if (arr[0] === res[0] && res[1] !== "hb") setBtcUsd(res[1]);
      if (arr[1] === res[0] && res[1] !== "hb") setEthUsd(res[1]);
      if (arr[2] === res[0] && res[1] !== "hb") setEosUsd(res[1]);

      if (arr[3] === res[0] && res[1] !== "hb") setBtcEur(res[1]);
      if (arr[4] === res[0] && res[1] !== "hb") setEthEur(res[1]);
      if (arr[5] === res[0] && res[1] !== "hb") setEosEur(res[1]);
    };
  };

  return { getData, btcUsd, ethUsd, eosUsd, btcEur, ethEur, eosEur };
};

export default useWebsocket;

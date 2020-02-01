import { useState, useReducer } from "react";
const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
const cryptoId = [];

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case cryptoId[0]:
      return { ...state, btcUsd: action.payload };
    case cryptoId[1]:
      return { ...state, ethUsd: action.payload };
    case cryptoId[2]:
      return { ...state, eosUsd: action.payload };
    case cryptoId[3]:
      return { ...state, btcEur: action.payload };
    case cryptoId[4]:
      return { ...state, ethEur: action.payload };
    case cryptoId[5]:
      return { ...state, eosEur: action.payload };
    default:
      throw new Error();
  }
}

const useWebsocket = () => {
  // const [btcUsd, setBtcUsd] = useState();
  // const [ethUsd, setEthUsd] = useState();
  // const [eosUsd, setEosUsd] = useState();

  // const [btcEur, setBtcEur] = useState();
  // const [ethEur, setEthEur] = useState();
  // const [eosEur, setEosEur] = useState();

  const [
    { btcUsd, ethUsd, eosUsd, btcEur, ethEur, eosEur },
    dispatch
  ] = useReducer(reducer, initialState);

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

      // res.chanId && cryptoId.length !== 6 && cryptoId.push(res.chanId);

      if (res.chanId && cryptoId.length !== 6) {
        cryptoId.push(res.chanId);
      }

      // if (arr[0] === res[0] && res[1] !== "hb") setBtcUsd(res[1]);
      // if (arr[1] === res[0] && res[1] !== "hb") setEthUsd(res[1]);
      // if (arr[2] === res[0] && res[1] !== "hb") setEosUsd(res[1]);

      // if (arr[3] === res[0] && res[1] !== "hb") setBtcEur(res[1]);
      // if (arr[4] === res[0] && res[1] !== "hb") setEthEur(res[1]);
      // if (arr[5] === res[0] && res[1] !== "hb") setEosEur(res[1]);

      cryptoId.forEach(item => {
        if (item === res[0] && res[1] !== "hb") {
          dispatch({ type: item, payload: res[1] });
        }
      });

      // if (cryptoId[0] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "btc__usd", payload: res[1] });
      // if (cryptoId[1] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "eth__usd", payload: res[1] });
      // if (cryptoId[2] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "eos__usd", payload: res[1] });

      // if (cryptoId[3] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "btc__eur", payload: res[1] });
      // if (cryptoId[4] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "eth__eur", payload: res[1] });
      // if (cryptoId[5] === res[0] && res[1] !== "hb")
      //   dispatch({ type: "eos__eur", payload: res[1] });
    };
  };

  return { getData, btcUsd, ethUsd, eosUsd, btcEur, ethEur, eosEur };
};

export default useWebsocket;

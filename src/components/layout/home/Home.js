import React from "react";
import PropTypes from "prop-types";

// components
import Tr from "./Tr";

const Home = ({ btcUsd, ethUsd, eosUsd, btcEur, ethEur, eosEur }) => {
  console.log(ethUsd);

  return (
    <div className="home">
      <table className="home__table">
        <thead className="home__thead">
          <tr className="home__thead--tr">
            <th className="home__thead--th">#</th>
            <th className="home__thead--th">Symbol</th>
            <th className="home__thead--th">Daily change</th>
            <th className="home__thead--th">Volume</th>
            <th className="home__thead--th">Last price</th>
          </tr>
        </thead>
        <tbody className="home__tbody">
          <Tr data={btcUsd} id="1" name="BTCUSD" />
          <Tr data={btcEur} id="2" name="BTCEUR" />
          <Tr data={ethUsd} id="3" name="ETHUSD" />
          <Tr data={ethEur} id="4" name="ETHEUR" />
          <Tr data={eosUsd} id="5" name="EOSUSD" />
          <Tr data={eosEur} id="6" name="EOSEUR" />
        </tbody>
      </table>
    </div>
  );
};

Home.propTypes = {
  btcUsd: PropTypes.array,
  ethUsd: PropTypes.array,
  eosUsd: PropTypes.array,
  btcEur: PropTypes.array,
  ethEur: PropTypes.array,
  eosEur: PropTypes.array
};

export default Home;

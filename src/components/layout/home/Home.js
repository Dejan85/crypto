import React from "react";
import PropTypes from "prop-types";

const Home = ({ btcUsd, ethUsd, eosUsd, btcEur, ethEur, eosEur }) => {
  //   console.log(btcUsd);

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
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">1</td>
            <td className="home__tbody--td">BTCUSD</td>
            <td className="home__tbody--td">
              {btcUsd && btcUsd[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{btcUsd && btcUsd[3]}</td>
            <td className="home__tbody--td">{btcUsd && btcUsd[2]}</td>
          </tr>
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">2</td>
            <td className="home__tbody--td">BTCEUR</td>
            <td className="home__tbody--td">
              {btcEur && btcEur[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{btcEur && btcEur[3]}</td>
            <td className="home__tbody--td">{btcEur && btcEur[2]}</td>
          </tr>
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">3</td>
            <td className="home__tbody--td">ETHUSD</td>
            <td className="home__tbody--td">
              {ethUsd && ethUsd[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{ethUsd && ethUsd[3]}</td>
            <td className="home__tbody--td">{ethUsd && ethUsd[2]}</td>
          </tr>
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">4</td>
            <td className="home__tbody--td">ETHEUR</td>
            <td className="home__tbody--td">
              {ethEur && ethEur[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{ethEur && ethEur[3]}</td>
            <td className="home__tbody--td">{ethEur && ethEur[2]}</td>
          </tr>
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">5</td>
            <td className="home__tbody--td">EOSUSD</td>
            <td className="home__tbody--td">
              {eosUsd && eosUsd[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{eosUsd && eosUsd[3]}</td>
            <td className="home__tbody--td">{eosUsd && eosUsd[2]}</td>
          </tr>
          <tr className="home__tbody--tr">
            <td className="home__tbody--td">6</td>
            <td className="home__tbody--td">EOSEUR</td>
            <td className="home__tbody--td">
              {eosEur && eosEur[4].toFixed(1)}
            </td>
            <td className="home__tbody--td">{eosEur && eosEur[3]}</td>
            <td className="home__tbody--td">{eosEur && eosEur[2]}</td>
          </tr>
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

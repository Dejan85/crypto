import React, { useEffect } from "react";
import "./scss/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Profile from "./components/layout/profile/Profile";

// hooks
import usePrivateRoute from "./components/hooks/usePrivateRoute";
import useWebsocket from "./components/hooks/useWebsocket";

function App() {
  const { PrivateRoute } = usePrivateRoute();

  const {
    getData,
    btcUsd,
    ethUsd,
    eosUsd,
    btcEur,
    ethEur,
    eosEur
  } = useWebsocket();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              btcUsd={btcUsd}
              ethUsd={ethUsd}
              eosUsd={eosUsd}
              btcEur={btcEur}
              ethEur={ethEur}
              eosEur={eosEur}
            />
          </Route>
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

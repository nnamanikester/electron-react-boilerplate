import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./page-renderer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/home" />} />
        <Route component={() => 404} />
      </Switch>
    </Router>
  );
};

export default App;

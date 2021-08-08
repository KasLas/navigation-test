import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:page/:tab?/:child?" exact component={Navigation} />
      </Switch>
    </Router>
  );
}

export default App;

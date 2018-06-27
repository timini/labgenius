import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import ProcessList from "./components/ProcessList";
import ProcessDetail from "./components/ProcessDetail";

export const Processes = () => (
  <Switch>
    <Route path="/processes/:id" component={ProcessDetail} />
    <Route component={ProcessList} />
  </Switch>
);

export default Processes;

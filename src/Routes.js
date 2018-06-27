import React from "react";
import { Route, Switch } from "react-router-dom";

import Processes from "./modules/processes/component";
import NotFound from "./NotFound";

const Layout = ({ children }) => (
  <div className="w-40 center sans-serif black-80 helvetica">{children}</div>
);

export const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Processes} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../components/Feed";
import Uploaded from "../components/Uploaded";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/feed" component={Feed} />
          <Route path="/uploaded" component={Uploaded} />
          <Route path="/" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

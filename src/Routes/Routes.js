import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Feed from "../components/Feed/Feed";
import Uploaded from "../../src/components/Uploaded/Uploaded";
import NewUpload from "../components/Upload/NewUpload";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/feed" component={Feed} />
          <Route path="/uploaded" component={Uploaded} />
          <Route path="/new" component={NewUpload} />

          <Route
            path="/"
            render={() => {
              return <Redirect to="/feed" />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

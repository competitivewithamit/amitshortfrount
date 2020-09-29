import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InsertUrl from "./InsertUrl";
import Redirectpage from "./redirectpage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <InsertUrl />} />
        <Route path="/amit" render={() => <Redirectpage />} />
      </Switch>
    </BrowserRouter>
  );
}

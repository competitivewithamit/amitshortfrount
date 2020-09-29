import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InsertUrl from "./InsertUrl";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <InsertUrl />} />
        <Route exact path="/amit" component={()=>{return <h1>sdagsdhagsdkjas</h1>}} />
      </Switch>
    </BrowserRouter>
  );
}

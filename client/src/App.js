import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import DialerApp from "./dialer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/voice" component={DialerApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

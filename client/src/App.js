import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import DialerApp from "./components/Dialer/dialer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/voice" component={DialerApp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

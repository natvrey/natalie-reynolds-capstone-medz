import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DialerApp from "./components/PhoneDialer/PhoneDialer";
import HomePage from "./pages/HomePage/HomePage";
import CreateProfilePage from "./pages/CreateProfilePage/CreateProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/voice" component={DialerApp} />
        <Route
          path="/profiles"
          render={(routerProps) => {
            return <CreateProfilePage routerProps={routerProps} />;
          }}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

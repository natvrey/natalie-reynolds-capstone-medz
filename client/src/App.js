import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PhoneDialer from "./components/PhoneDialer/PhoneDialer";
import HomePage from "./pages/HomePage/HomePage";
import CreateProfilePage from "./pages/CreateProfilePage/CreateProfilePage";
import ViewSingleProfile from "./components/ViewSingleProfile/ViewSingleProfile";
import AllProfiles from "./components/AllProfiles/AllProfiles";
import AppInstructions from "./components/AppInstructions/AppInstructions";

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    allProfiles: [],
  };

  fetchData = () => {
    axios
      .get(`${API_URL}/profiles`)

      .then((response) => {
        this.setState({
          allProfiles: response.data,
        });
        // console.log("Success getting all profiles", response.data);
      })

      .catch((error) => error);
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app__page-container">
          <Header />
          <div className="app__content-wrap">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/instructions" component={AppInstructions} />
              <Route path="/voice" component={PhoneDialer} />

              <Route
                path="/profiles/create"
                render={(routerProps) => {
                  return <CreateProfilePage routerProps={routerProps} />;
                }}
              />

              <Route
                path="/profiles/:profileId"
                component={ViewSingleProfile}
              />

              <Route
                path="/profiles"
                render={(routerProps) => {
                  return (
                    <AllProfiles
                      allProfiles={this.state.allProfiles}
                      routerProps={routerProps}
                    />
                  );
                }}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

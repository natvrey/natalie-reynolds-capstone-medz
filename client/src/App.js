import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DialerApp from "./components/PhoneDialer/PhoneDialer";
import HomePage from "./pages/HomePage/HomePage";
import CreateProfilePage from "./pages/CreateProfilePage/CreateProfilePage";
// import ViewAllProfilesPage from "./pages/ViewAllProfilesPage/ViewAllProfilesPage";
import ViewSingleProfile from "./components/ViewSingleProfile/ViewSingleProfile";
import AllProfiles from "./components/AllProfiles/AllProfiles";
import AppInstructions from "./components/AppInstructions/AppInstructions";

import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    allProfiles: [],
    singleProfile: null,
  };

  fetchProfileDetail = () => {
    // const profileId = this.props.match.params.profileId;
    const profileId = this.props;
    console.log(this.props, JSON.stringify(this.props, null, 2));
    axios
      .get(`${API_URL}/profiles/${profileId}`)
      .then((response) => {
        this.setState({
          singleProfile: response.data,
        });
        console.log(response.data, "Success getting profile by id");
      })
      .catch((error) =>
        console.log(
          "Error",
          error,
          // "profileID" + this.props.match.params.profileId
          "profileID" + this.props.match
        )
      );
  };

  componentDidMount() {
    document.title = "All Profiles";

    axios
      .get(`${API_URL}/profiles`)
      .then((response) => {
        this.setState({
          allProfiles: response.data,
        });
        console.log("Success getting all profiles", response.data);
      })

      .catch((error) => error);

    // this.fetchProfileDetail();
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
              <Route path="/voice" component={DialerApp} />
              <Route
                path="/profiles/create"
                render={(routerProps) => {
                  return <CreateProfilePage routerProps={routerProps} />;
                }}
              />
              {/* <Route
                path="/profiles/:profileId"
                render={(routerProps) => {
                  return (
                    <ViewSingleProfile
                      singleProfile={this.state.singleProfile}
                      routerProps={routerProps}
                    />
                  );
                }}
              /> */}
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

// import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.scss";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import DialerApp from "./components/PhoneDialer/PhoneDialer";
// import HomePage from "./pages/HomePage/HomePage";
// import CreateProfilePage from "./pages/CreateProfilePage/CreateProfilePage";
// import ViewAllProfilesPage from "./pages/ViewAllProfilesPage/ViewAllProfilesPage";
// import ViewSingleProfile from "./components/ViewSingleProfile/ViewSingleProfile";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app__page-container">
//         <Header />
//         <div className="app__content-wrap">
//           <Switch>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/voice" component={DialerApp} />
//             <Route
//               path="/profiles/create"
//               render={(routerProps) => {
//                 return <CreateProfilePage routerProps={routerProps} />;
//               }}
//             />
//             <Route path="/profiles/profileId" component={ViewSingleProfile} />;
//             <Route path="/profiles" component={ViewAllProfilesPage} />
//           </Switch>
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

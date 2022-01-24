import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Route, HashRouter } from "react-router-dom";

//BrowserHistory is replaced by HashRouter
ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>,

  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./style.min.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClientProvider, client } from "./client";

import HomeComponent from "./components/HomeComponent";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            /* component={HomeComponent} */ render={() => {
              const root = document.querySelector("#root");
              root.classList.add("home");

              return <HomeComponent />;
            }}
          />
          {/* <Route exact path="/login" component="Login" />
          <Route exact path="/signup" component="Signup" /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Router>
    <ClientProvider client={client}>
      <App />
    </ClientProvider>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();

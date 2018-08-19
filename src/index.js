import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.css";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClientProvider, client } from "./client";

import HomeContainer from "./container/HomeContainer";
import LoginContainer from "./container/LoginContainer";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          /* component={HomeContainer} */ render={() => {
            const root = document.querySelector("#root");
            root.className = "home";

            return <HomeContainer />;
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            const root = document.querySelector("#root");
            root.className = "login";

            return <LoginContainer />;
          }}
        />
      </Switch>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <ClientProvider client={client}>
        <App />
      </ClientProvider>
    </Router>
  </MuiThemeProvider>,
  document.querySelector("#root")
);

registerServiceWorker();

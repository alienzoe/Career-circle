import React from 'react';
import ReactDOM from 'react-dom';
import './style.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component="Home">
          <Route exact path="/login" component="Login">
          <Route exact path="/signup" component="Signup">
        </Switch>
      </>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

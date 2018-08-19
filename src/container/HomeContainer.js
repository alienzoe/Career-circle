import React from "react";
import { Header } from "../components/HeaderComponent";

export default class LoginContainer extends React.Component {
  state = {
    search: null
  };

  render() {
    return (
      <React.Fragment>
        <Header active="home" />
        <section>
          <div className="container">
            <h1>Find your Dream</h1>
            <h4>Companies are looking at you!</h4>
            <form>
              <div className="search z-depth-2">
                <i className="material-icons">location_on</i>
                <input
                  type="text"
                  id="autocomplete-search"
                  className="autocomplete"
                />
              </div>

              <button
                style={{ fontWeight: "bold" }}
                className="btn waves-effect waves-light orange darken-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import url from "url";
import "./App.scss";
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";
import About from "./containers/About.jsx";

const logo = url.resolve(process.env.PUBLIC_URL, "/icons/se-logo-trimmed.png");

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top navbar-expand{-sm|-md|-lg|-xl} navbar-expand-lg navbar-light bg-light">
          <a href={`${process.env.PUBLIC_URL}/`} className="navbar-brand">
            <img
              src={logo}
              width="30"
              className="d-inline-block align-top"
              alt=""
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse primary-header"
            id="navbarSupportedContent"
          >
            <div className="nav navbar-nav mr-auto">
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href={`${process.env.PUBLIC_URL}/`}
              >
                Home
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href={`${process.env.PUBLIC_URL}/about`}
              >
                About
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href={`${process.env.PUBLIC_URL}/events`}
              >
                Events
              </a>
            </div>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home.jsx";
import Platforms from "./containers/Platforms.jsx";
import Events from "./containers/Events.jsx";
import About from "./containers/About.jsx";
import News from "./containers/News.jsx";
import Council from "./containers/Council.jsx";
import Sponsors from "./containers/Sponsors.jsx";
import logo from "./assets/images/SE_Logo_inverted_Trimmed_transparent.png";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top navbar-expand{-sm|-md|-lg|-xl} navbar-expand-lg navbar-light bg-light">
          <a href="/" className="navbar-brand">
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
                href="/"
              >
                home
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href="/events"
              >
                events
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href="/news"
              >
                news
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href="/council"
              >
                council
              </a>
              <a
                activeClassName="active"
                className="nav-link nav-item"
                href="/about"
              >
                about
              </a>
            </div>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/news" component={News} />
            <Route exact path="/council" component={Council} />
            <Route exact path="/about" component={About} />
            <Route exact path="/platforms" component={Platforms} />
            <Route exact path="/sponsors" component={Sponsors} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

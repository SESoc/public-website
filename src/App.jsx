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
import logo from "./assets/images/SE_Logo_inverted_Trimmed.png";

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
        <Router basename={'/~sesoc'}>
          <Switch>

            <Route path={`${process.env.PUBLIC_URL}/events`} component={Events} />
            <Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
            <Route path={`${process.env.PUBLIC_URL}/council`} component={Council} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/platforms`} component={Platforms} />
            <Route path={`${process.env.PUBLIC_URL}/sponsors`} component={Sponsors} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

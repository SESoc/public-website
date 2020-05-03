import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
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
          <Link href={`${process.env.PUBLIC_URL}/`} className="navbar-brand">
            <img
              src={logo}
              width="30"
              className="d-inline-block align-top"
              alt=""
            ></img>
          </Link>
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
              <Link
                activeClassName="active"
                className="nav-link nav-item"
                to={`${process.env.PUBLIC_URL}/`}
              >
                home
              </Link>
              <Link
                activeClassName="active"
                className="nav-link nav-item"
                href={`${process.env.PUBLIC_URL}/events`}
              >
                events
              </Link>
              <Link
                activeClassName="active"
                className="nav-link nav-item"
                to={`${process.env.PUBLIC_URL}/news`}
              >
                news
              </Link>
              <Link
                activeClassName="active"
                className="nav-link nav-item"
                to={`${process.env.PUBLIC_URL}/council`}
              >
                council
              </Link>
              <Link
                activeClassName="active"
                className="nav-link nav-item"
                to={`${process.env.PUBLIC_URL}/about`}
              >
                about
              </Link>
            </div>
          </div>
        </nav>
        <Router basename={'/~sesoc'}>
          <Switch>

            <Route path={`/events`} component={Events} />
            <Route path={`/news`} component={News} />
            <Route path={`/council`} component={Council} />
            <Route path={`/about`} component={About} />
            <Route path={`/platforms`} component={Platforms} />
            <Route path={`/sponsors`} component={Sponsors} />
            <Route path={`/`} component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

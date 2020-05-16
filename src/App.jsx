import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import url from "url";
import "./App.scss";
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";
import About from "./containers/About.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

const logo = url.resolve(process.env.PUBLIC_URL, "/icons/se-logo-trimmed.png");

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

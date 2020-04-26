import React, {Component} from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/Home.jsx";
import Platforms from "./containers/Platforms.jsx";
import Events from "./containers/Events.jsx";
import About from "./containers/About.jsx";
import News from "./containers/News.jsx";
import Council from "./containers/Council.jsx";
import Sponsors from "./containers/Sponsors.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/news" component={News} />
            <Route exact path="/council" component={Council} />
            <Route exact path="/about" component={About} />
            <Route exact path="/platforms" component={Platforms} />
            <Route exact path="/sponsors" component={Sponsors} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

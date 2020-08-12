import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home.jsx";
import Events from "./containers/Events.jsx";
import About from "./containers/About.jsx";
import GetInvolved from "./containers/GetInvolved.jsx";
import Blog from "./containers/Blog.jsx";
import Wise from "./containers/Wise.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

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
            <Route exact path="/getinvolved" component={GetInvolved} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/wise" component={Wise} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

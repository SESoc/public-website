import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Platforms from './containers/Platforms.jsx';
import Events from './containers/Events.jsx';
import About from './containers/About.jsx';
import Contact from './containers/Contact.jsx';
import Council from './containers/Council.jsx';
import Sponsors from './containers/Sponsors.jsx';

class App extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to the Software Engineering Society!</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/events'} className="nav-link">Events</Link></li>
            <li><Link to={'/council'} className="nav-link">Council</Link></li>
            {/*<li><Link to={'/sponsors'} className="nav-link">Sponsors</Link></li>
             <li><Link to={'/platforms'} className="nav-link">Platforms</Link></li>*/}

          </ul>
          </nav>
          <hr />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/platforms' component={Platforms}/>
          <Route exact path='/events' component={Events} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/council' component={Council} />
          <Route exact path='/sponsors' component={Sponsors} />
          </Switch>
        </div>
    );
  }
}

export default App;

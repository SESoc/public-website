import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home.jsx';
import Platforms from './containers/Platforms.jsx';
import Events from './containers/Events.jsx';
import About from './containers/About.jsx';
import Contact from './containers/Contact.jsx';
import Council from './containers/Council.jsx';
import Sponsors from './containers/Sponsors.jsx';
import logo from './assets/images/SE_Logo_inverted_Trimmed.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top navbar-expand{-sm|-md|-lg|-xl} navbar-expand-lg navbar-light bg-light">
          <a href="/" className="navbar-brand">
            <img src={logo} width="30" className="d-inline-block align-top" alt=""></img>
            &nbsp; SE Soc
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse primary-header" id="navbarSupportedContent">
            <div className="nav navbar-nav mr-auto">
              <a activeClassName="active" className="nav-link nav-item" href="/">Home</a>
              <a activeClassName="active" className="nav-link nav-item" href="/about" >About Us</a>
              <a activeClassName="active" className="nav-link nav-item" href="/contact">Contact Us</a>
              <a activeClassName="active" className="nav-link nav-item" href="/events">Events</a>
              <a activeClassName="active" className="nav-link nav-item" href="/council">Council</a>
            </div>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/platforms' component={Platforms}/>
            <Route exact path='/events' component={Events} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/council' component={Council} />
            <Route exact path='/sponsors' component={Sponsors} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

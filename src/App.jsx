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
import logo from './assets/images/SE_Logo_inverted_Trimmed.png';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top navbar-expand{-sm|-md|-lg|-xl} navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              <img src={logo} width="30" className="d-inline-block align-top" alt=""></img>
              &nbsp; SE Soc
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse primary-header" id="navbarSupportedContent">
              <div className="primary-nav">
                <ul className="nav navbar-nav mr-auto">
                  <li className="n-item active">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="n-item">
                    <a className="nav-link" href="/about" >About Us</a>
                  </li>
                  <li className="n-item">
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                  <li className="n-item">
                    <a className="nav-link" href="/events">Events</a>
                  </li>
                  <li className="n-item">
                    <a className="nav-link" href="/council">Council</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
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

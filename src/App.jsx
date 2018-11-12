import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
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
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/platforms' component={Platforms}/>
        <Route exact path='/events' component={Events} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/council' component={Council} />
        <Route exact path='/sponsors' component={Sponsors} />
      </Switch>
    );
  }
}

export default App;

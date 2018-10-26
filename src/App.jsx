import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home.jsx';
import Platforms from './containers/Platforms.jsx';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/platforms' component={Platforms}/>
      </Switch>
    );
  }
}

export default App;

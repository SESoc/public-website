import React, { Component } from 'react';
import logo from '../images/SE_Logo_inverted_Trimmed.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming sooner.
          </p>
        </header>
      </div>
    );
  }
}

export default App;

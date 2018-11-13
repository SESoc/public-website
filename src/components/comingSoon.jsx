import React, { Component } from 'react';
import logo from '../assets/images/SE_Logo_inverted_Trimmed.png';

class ComingSoon extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming soon.
          </p>
        </header>
      </div>
    );
  }
}

export default ComingSoon;

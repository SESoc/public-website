import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h1>Welcome</h1><h3>UWaterloo Software Engineering Society</h3>
        <p>Checkout our Facebook Page:</p>
        <a type="button" class="btn btn-primary" href="https://www.facebook.com/uwsesoc">Facebook</a>
     </div>
    );
  }
}

export default Home;

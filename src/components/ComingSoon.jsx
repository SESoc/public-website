import React, {Component} from "react";
import url from "url";

const logo = url.resolve(process.env.PUBLIC_URL, "/logos/se-logo-trimmed.png");

class ComingSoon extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Coming soon.</p>
        </header>
      </div>
    );
  }
}

export default ComingSoon;

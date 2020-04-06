import React, { Component } from 'react';
import ComingSoon from '../components/comingSoon';

class Contact extends Component {
  render() {
    return (
      <div className="center">
        <h3>We'd love to hear from you!</h3>
        <div>
          <a href="mailto:se-soc@uwaterloo.ca">se-soc@uwaterloo.ca</a>
        </div>
      </div>
    );
  }
}

export default Contact;

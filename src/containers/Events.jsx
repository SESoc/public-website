import React, { Component } from 'react';
import ComingSoon from '../components/comingSoon';
import './../App.css'

class Events extends Component {
  render() {
    return (
      <div>
        <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=lb6ttb1ks37ql5r8isuasgcdo8%40group.calendar.google.com&ctz=America%2FToronto"  frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export default Events;

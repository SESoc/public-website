import React, { Component } from 'react';
import ComingSoon from '../components/comingSoon';
import './../App.css'

class Events extends Component {
  render() {
    return (
      <div className="responsiveCal">
        <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=lb6ttb1ks37ql5r8isuasgcdo8%40group.calendar.google.com&ctz=America%2FToronto&showPrint=0"  frameborder="0" scrolling="no"></iframe>
      </div>
    );
  }
}

export default Events;

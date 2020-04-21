import React, { Component } from 'react';
import EventList from '../components/EventList/EventList';
import './../App.scss'

class Events extends Component {
  render() {
    return (
      <div class="container">
          <div class="container-left"> <EventList/> </div>
          <div class="container-right"> 
          <div className="responsiveCal">
            <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=lb6ttb1ks37ql5r8isuasgcdo8%40group.calendar.google.com&ctz=America%2FToronto&showPrint=0"  frameborder="0" scrolling="no"></iframe>
          </div>   
          </div>
      </div>
    );
  }
}

export default Events;

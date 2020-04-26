import React, {Component} from "react";
import EventList from "../components/EventList";
import "./../App.scss";

class Events extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-left">
          {" "}
          <EventList />{" "}
        </div>
        <div className="container-right">
          <div className="responsiveCal">
            <iframe
              title="se-soc-event-calendar"
              className="calendar"
              src="https://calendar.google.com/calendar/embed?src=lb6ttb1ks37ql5r8isuasgcdo8%40group.calendar.google.com&ctz=America%2FToronto&showPrint=0"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

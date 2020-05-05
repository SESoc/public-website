import React, {Component} from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import "./styles/EventList.css";

const Event = props => (
  <div>
    <p className="mb-0">{props.event.dateLabel}</p>
    <p>
      <span className="accent">
        {" "}
        {props.event.title}
        {props.event.description === "" ? ": " : ""}{" "}
      </span>
      {props.event.description}
    </p>
  </div>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

const EventsList = props =>
  props.events.map(event => (
    <tr>
      <th>
        <Event event={event} />
      </th>
    </tr>
  ));

class EventList extends Component {
  render() {
    let curDateTime = Moment();
    let upcomingEvents = this.props.events.filter(e =>
      Moment(e.end).isAfter(curDateTime));
    return (
      <div className="event-list">
        <h1>upcoming events</h1>

        {upcomingEvents.length ? (
          <table>
            <EventsList events={upcomingEvents} />
          </table>
        ) : (
          <div className="mb-3">
            We have more events coming to you soon! Stay tuned!
          </div>
        )}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventList;

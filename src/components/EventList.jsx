import React, {Component} from "react";
import PropTypes from "prop-types";
import "./styles/EventList.scss";
import {upcomingEvents} from "../modules/gcal";

const Event = props => (
  <div className="event-body">
    <p className="body-title">
      <strong>{props.event.dateLabel}</strong>
      <br />
      <span className="accent">{props.event.title}</span>
    </p>
    <div dangerouslySetInnerHTML={{__html: props.event.description}} />
  </div>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

const EventsList = props =>
  props.events.map((event, index) => (
    <tr key={index}>
      <td>
        <Event event={event} />
      </td>
    </tr>
  ));

class EventList extends Component {
  render() {
    return (
      <div className="event-list">
        <h1>upcoming events</h1>
        {upcomingEvents.length ? (
          <div className="fade-in-bottom">
            <table className="scroll">
              <tbody>
                <EventsList events={upcomingEvents(this.props.events)} />
              </tbody>
            </table>
          </div>
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

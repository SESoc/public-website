import React, {Component} from "react";
import PropTypes from "prop-types";
import url from "url";
import "./styles/EventList.scss";
import {upcomingEvents} from "../modules/gcal";

const moreEvents = url.resolve(
  process.env.PUBLIC_URL,
  "/illustrations/more-events.png",
);

const Event = props => (
  <div className="event">
    <p className="event-title">
      <strong>{props.event.dateLabel}</strong>
      <br />
      <span className="accent">
        <a href={props.event.link} target="_blank" rel="noopener noreferrer">
          {" "}
          {props.event.title}
        </a>
      </span>
    </p>
    <div
      className="event-description"
      dangerouslySetInnerHTML={{__html: props.event.description}}
    />
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
        <h1>Upcoming Events</h1>
        {!upcomingEvents.length ? (
          <div className="fade-in-bottom">
            <table className="scroll">
              <tbody>
                <EventsList events={upcomingEvents(this.props.events)} />
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-5 mb-5" id="empty-event-list">
            <img alt="More events coming soon." id="more-events" src={moreEvents} />
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

import React, {Component} from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import "./styles/EventList.css";

const Event = props => (
  <div className="event-body">
    <p>
      <strong>{props.event.dateLabel}</strong>
      <br />
      <span className="accent">{props.event.title}</span>
      <div dangerouslySetInnerHTML={{__html: props.event.description}} />
    </p>
  </div>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

const EventsList = props =>
  props.events.map(event => (
    <tr>
      <td>
        <Event event={event} />
      </td>
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
          <div className="fade-in-bottom">
            <table className="scroll">
              <EventsList events={upcomingEvents} />
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

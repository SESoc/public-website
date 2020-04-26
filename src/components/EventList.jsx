/* eslint-disable react/jsx-key */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import "./styles/EventList.css";

const Event = props => (
  <div>
    <p className="mb-0">{Moment(props.event.start).format("MMMM Do, YYYY")}</p>
    <p>
      <span className="accent"> {props.event.title}: </span>{" "}
      {props.event.description}
    </p>
  </div>
);

const EventsList = props => {
  const events = props.events;
  const listItems = events.map(event => (
    <tr>
      <th>
        <Event event={event} />
      </th>
    </tr>
  ));
  return listItems;
};

class EventList extends Component {
  render() {
    return (
      <div className="event-list">
        <h1>upcoming events</h1>
        <div>
          <EventsList events={this.props.events} />
        </div>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default EventList;

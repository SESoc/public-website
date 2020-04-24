/* eslint-disable react/jsx-key */
import React, {Component} from "react";
import "./EventList.scss";
import PropTypes from "prop-types";

const eventsData = [
  {
    date: "January 1, 2020",
    title: "The SE Coffee House",
    body:
      "Come out for a night of music, a stage full of talent and an atmosphere of good vibes.",
  },
  {
    date: "January 1, 2020",
    title: "SE Esports Tourney",
    body:
      "Lockdown blues? Join us online to prove your skills, make new friends and play through the night.",
  },
  {
    date: "January 1, 2020",
    title: "Club Penguin Squad Up",
    body:
      "Waddle Waddle. Join us for a penguin party. Full SEnd south pole style.",
  },
];

function Event(props) {
  return (
    <div className="App">
      <p style={{marginBottom: 0}}>{props.event.date}</p>
      <p>
        <span style={props.colorStyle}> {props.event.title}: </span> {props.event.body}
      </p>
    </div>
  );
}

function EventsList(props) {
  const events = props.events;
  const colorStyle = (index) => (
    {color: index % 2 == 1 ? "var(--color-accent-eng)" : "var(--color-accent-math)"}
  );
  const listItems = events.map((event, i) => (
    <tr>
      <th>
        <Event event={event} colorStyle={colorStyle(i)} />
      </th>
    </tr>
  ));
  return listItems;
}

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>upcoming events</h1>
        <div>
          <EventsList events={eventsData} />
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  },
  colorStyle : PropTypes.object,
};

export default EventList;

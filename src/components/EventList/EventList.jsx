import React, { Component } from 'react';
import "./EventList.scss"

const eventsData = [
  {
    date: "January 1, 2020",
    title: "The SE Coffee House",
    body: "Come out for a night of music, a stage full of talent and an atmosphere of good vibes."
  },
  {
    date: "January 1, 2020",
    title: "SE Esports Tourney",
    body: "Lockdown blues? Join us online to prove your skills, make new friends and play through the night."
  },
  {
    date: "January 1, 2020",
    title: "Club Penguin Squad Up",
    body: "Waddle Waddle. Join us for a penguin party. Full SEnd south pole style."
  }
]

function Event(props) {
  return (
    <div className="App">
      <p>{props.event.date} <br />
      <span> {props.event.title}: </span> {props.event.body} </p>
    </div>
  );
}

function EventsList(props) {
  const events = props.events;
  const listItems = events.map((event) => 
    <tr><th><Event event={event}/></th></tr>
  )
  return (listItems);
}

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>upcoming events</h1>
        <div>
          <EventsList events={eventsData}/>
        </div>
      </div>
    );
  }
}

export default EventList;

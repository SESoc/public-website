import React, {Component} from "react";
import EventList from "../components/EventList";
import Moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./../App.scss";
import {getEvents} from "../modules/gcal";
import "./styles/Events.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(Moment);

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    getEvents(events => {
      this.setState({events});
    });
  }

  render() {
    // console.log(this.state.events);
    return (
      <div className="container">
        <div className="container-left">
          {" "}
          <EventList events={this.state.events} />{" "}
        </div>
        <div className="container-right">
          <div style={{height: "500pt"}}>
            <Calendar
              localizer={localizer}
              events={this.state.events}
              startAccessor="start"
              endAccessor="end"
              views={["month", "day"]}
              defaultDate={Moment().toDate()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

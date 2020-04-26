import React, {Component} from "react";
import EventList from "../components/EventList";
import Moment from "moment";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./../App.scss";
import {getEvents} from "../modules/gcal";
import "./styles/Events.scss";
import "./styles/react-big-calendar.scss";

const localizer = momentLocalizer(Moment);

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  // const goToNext = () => {
  //   toolbar.date.setMonth(toolbar.date.getMonth() + 3);
  //   toolbar.onNavigate("next");
  // };

  // const goToCurrent = () => {
  //   const now = new Date();
  //   toolbar.date.setMonth(now.getMonth());
  //   toolbar.date.setYear(now.getFullYear());
  //   toolbar.onNavigate("current");
  // };

  const label = () => {
    const date = Moment(toolbar.date);
    return (
      <span><b>{date.format("MMMM")}</b><span> {date.format("YYYY")}</span></span>
    );
  };

  return (
    <div>
      <label>{label()}</label>

      <div>
        <button onClick={goToBack}>&#8249;</button>
        {/* <button onClick={goToCurrent}>today</button> */}
        {/* <button onClick={goToNext}>&#8250;</button> */}
      </div>
    </div >
  );
};

const CustomCalendar = (props) => {
  return (
    <Calendar
      localizer={localizer}
      events={props.events.map((event) => {
        event.start = Moment(event.start).toDate();
        event.end = Moment(event.end).toDate();
        return event;
      })}
      startAccessor="start"
      endAccessor="end"
      views={["month"]}
      defaultDate={Moment().toDate()}
      componets={{
        toolbar: CustomToolbar,
      }}
    />
  );
};

class Events extends Component {

  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    getEvents((events) => {
      this.setState({events});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="container-left">
          {" "}
          <EventList events={this.state.events}/>{" "}
        </div>
        <div className="container-right">
          <div style={{height: "500pt"}}>
            <CustomCalendar events={this.state.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

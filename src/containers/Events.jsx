/* eslint-disable react/prop-types */
import React, {Component} from "react";
import EventList from "../components/EventList";
import Moment from "moment";
import {Container, Row, Col} from "react-bootstrap";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./../App.scss";
import {getEvents} from "../modules/gcal";
import "./styles/Events.scss";
import "./styles/react-big-calendar.scss";

const localizer = momentLocalizer(Moment);

const EventCalendar = props => {
  return (
    <Calendar
      localizer={localizer}
      events={props.events.map(event => {
        event.start = Moment(event.start).toDate();
        event.end = Moment(event.end).toDate();
        return event;
      })}
      startAccessor="start"
      endAccessor="end"
      views={["month", "day"]}
      defaultDate={Moment().toDate()}
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
    getEvents(events => {
      this.setState({events});
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            {" "}
            <EventList events={this.state.events} />{" "}
          </Col>
          <Col sm={7}>
            <div style={{height: "600px"}}>
              <EventCalendar events={this.state.events} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Events;

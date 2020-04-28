import React, {Component} from "react";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";
import {Container, Row, Col, Button} from "react-bootstrap";
import {getEvents} from "../modules/gcal";
import "./../App.scss";
import "./styles/Events.scss";

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
      <Container className="mt-5">
        <Row>
          <Col sm={5}>
            {" "}
            <EventList events={this.state.events} />{" "}
          </Col>
          <Col sm={7} className="mt-5 mt-sm-0">
            <div className="cal">
              <EventCalendar events={this.state.events} />
            </div>
            <div className="mt-3">
              <Button
                variant="secondary"
                className="cal-add-btn"
                href="https://calendar.google.com/calendar?cid=bGI2dHRiMWtzMzdxbDVyOGlzdWFzZ2NkbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
              >
                + Google Calendar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;

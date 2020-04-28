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
      <Container>
        <Row>
          <Col sm={5}>
            {" "}
            <EventList events={this.state.events} />{" "}
          </Col>
          <Col sm={7}>
            <div className="cal">
              <EventCalendar events={this.state.events} />
            </div>
            <div className="cal-add">
              <Button
                variant="secondary"
                className="cal-add-btn"
                href="https://calendar.google.com/calendar/ical/lb6ttb1ks37ql5r8isuasgcdo8%40group.calendar.google.com/public/basic.ics"
              >
                Add Calendar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;

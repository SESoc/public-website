import React, {Component} from "react";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";
import {Container, Row, Col} from "react-bootstrap";
import "./../App.scss";
import {getEvents} from "../modules/gcal";
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

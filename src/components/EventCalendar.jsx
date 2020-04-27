/* eslint-disable react/prop-types */
import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import {Calendar, momentLocalizer} from "react-big-calendar";
import Moment from "moment";
import Toolbar from "react-big-calendar/lib/Toolbar";
import "./styles/ReactBigCalendar.scss";
import "./styles/EventCalendar.scss";

const localizer = momentLocalizer(Moment);

class CalendarToolbar extends Toolbar {
  render() {
    let {
      localizer: {messages},
      label,
    } = this.props;

    return (
      <div className="cal-c">
        <Row>
          <Col>
            <Button variant="light" className="cal-tb-nav-btn" onClick={this.navigate.bind(null, "TODAY")}>Today</Button>
          </Col>
          <Col xs={6}>
            <div className="cal-tb-nav">
              <Button variant="light" className="cal-tb-nav-btn" onClick={this.navigate.bind(null, "PREV")}>&larr;</Button>
              <div className="cal-date">{label}</div>
              <Button variant="light" className="cal-tb-nav-btn" onClick={this.navigate.bind(null, "NEXT")}>&rarr;</Button>
            </div>
          </Col>
          <Col>
            {this.viewNamesGroup(messages)}
          </Col>
        </Row>
      </div>
    );
  }

    navigate = action => {
      this.props.onNavigate(action);
    }

    view = view => {
      this.props.onView(view);
    }

    viewNamesGroup(messages) {
      let viewNames = this.props.views;

      if (viewNames.length > 1) {
        return viewNames.map(name => (
          <Button
            variant="light"
            className="cal-tb-nav-btn"
            key={name}
            onClick={this.view.bind(null, name)}
          >
            {messages[name]}
          </Button>
        ));
      }
    }
}

const EventCalendar = props => {
  return (
    <Calendar
      localizer={localizer}
      events={props.events.map(event => {
        event.start = Moment(event.start).toDate();
        event.end = Moment(event.end).toDate();
        return event;
      })}
      components = {{toolbar : CalendarToolbar}}
      startAccessor="start"
      endAccessor="end"
      views={["month", "day"]}
      defaultDate={Moment().toDate()}
    />
  );
};

export default EventCalendar;
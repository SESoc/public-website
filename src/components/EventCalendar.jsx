import React from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";
import {Calendar, momentLocalizer} from "react-big-calendar";
import Toolbar from "react-big-calendar/lib/Toolbar";
import Moment from "moment";
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
            <Button
              variant="light"
              className="cal-tb-btn"
              onClick={this.navigate.bind(null, "TODAY")}
            >
              Today
            </Button>
          </Col>
          <Col xs={6}>
            <div className="cal-tb-nav">
              <Button
                variant="light"
                className="cal-tb-btn"
                onClick={this.navigate.bind(null, "PREV")}
              >
                &larr;
              </Button>
              <div className="cal-date">{label}</div>
              <Button
                variant="light"
                className="cal-tb-btn"
                onClick={this.navigate.bind(null, "NEXT")}
              >
                &rarr;
              </Button>
            </div>
          </Col>
          <Col>{this.viewNamesGroup(messages)}</Col>
        </Row>
      </div>
    );
  }

  navigate = action => {
    this.props.onNavigate(action);
  };

  view = view => {
    this.props.onView(view);
  };

  viewNamesGroup(messages) {
    let viewNames = this.props.views;

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <Button
          variant="light"
          className="cal-tb-btn"
          key={name}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </Button>
      ));
    }
  }
}

CalendarToolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

const CalendarEventWrapper = ({event, children}) => <a href={event.link} target="_blank" rel="noopener noreferrer">{children}</a>;

CalendarEventWrapper.propTypes = {
  event: PropTypes.objectOf({
    link: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

const EventCalendar = props => {
  return (
    <Calendar
      localizer={localizer}
      events={props.events.map(event => {
        event.start = Moment(event.start).toDate();
        event.end = Moment(event.end).toDate();
        return event;
      })}
      components={{eventWrapper: CalendarEventWrapper, toolbar: CalendarToolbar}}
      startAccessor="start"
      endAccessor="end"
      views={["month", "day"]}
      defaultDate={Moment().toDate()}
    />
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventCalendar;

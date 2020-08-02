import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";
import "./styles/Meetings.scss";

const Meeting = props => (
  <Row className="mb-0 mt-3">
    <Col md={3} className="mb-1">
      <p className={`no-bottom-space bold colour-${props.meeting.type}`}>
        {props.meeting.title}
      </p>
      <p className="no-bottom-space"> {props.meeting.date} </p>
      <p className="no-bottom-space"> {props.meeting.time} </p>
      <p className="no-bottom-space"> {props.meeting.location} </p>
    </Col>
    {props.meeting.link ? (
      <Col md={9} className="mb-5 col-height">
        <iframe
          title="02-19-2019"
          height="100%"
          className="meeting-pdf"
          src={props.meeting.link}
        ></iframe>
      </Col>
    ) : (
      <Col md={9}>
        <p>The meeting agenda will be posted soon! Stay tuned.</p>
      </Col>
    )}
  </Row>
);

Meeting.propTypes = {
  meeting: PropTypes.object.isRequired,
};

class Meetings extends Component {
  render() {
    return (
      <div>
        {this.props.meetings.map(meeting => (
          <Meeting meeting={meeting} />
        ))}
        <Row className="archive-row">
          <Col>
            <p className="no-bottom-space">
              Take a look at our past initiatives by reading our past meeting
              minutes.
            </p>
          </Col>
          <Col xs={5}>
            <Button
              variant="secondary"
              className="archive-btn"
              href={this.props.archiveLink}
              target="_blank"
            >
              Meetings Archive
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

Meetings.propTypes = {
  meetings: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveLink: PropTypes.string.isRequired,
};

export default Meetings;

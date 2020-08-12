import React, {Component} from "react";
import PropTypes from "prop-types";
import {Row, Col, Button} from "react-bootstrap";
import "./styles/GetInvolvedWays.scss";

// Prompt Text + Action Button
// eg.    Have an event in mind?      [Suggest an Event]
const Action = props => (
  <Row className="action-row">
    <Col xs={7}>
      <p className="no-bottom-space"> {props.action.prompt} </p>
    </Col>
    <Col xs={5}>
      <Button
        variant="secondary"
        className="way-btn"
        href={props.action.link}
        target="_blank"
      >
        {props.action.buttonText}
      </Button>
    </Col>
  </Row>
);

Action.propTypes = {
  action: PropTypes.object.isRequired,
};

class GetInvolvedWays extends Component {
  render() {
    return (
      <div>
        {this.props.actions.map(action => (
          <Action action={action} />
        ))}
      </div>
    );
  }
}

GetInvolvedWays.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GetInvolvedWays;

import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, Col, Row} from "react-bootstrap";
import "./styles/SocietyProfileImages.scss";

const Image = props => (
  <Col xs={6} md={3} className="col-align-left">
    <Card className="card" style={{width: "95%"}}>
      <Card.Header className="card-header">
        <Card.Title className="text-center"></Card.Title>
        <Card.Text className="text-center">
          <strong>{props.person.name}</strong>
          <br />
          {props.person.year}
          <br />
          {props.person.position}
        </Card.Text>
      </Card.Header>
      <Card.Img className="card-img" variant="bottom" src={props.person.src} />
    </Card>
  </Col>
);

Image.propTypes = {
  person: PropTypes.object.isRequired,
};

const ImageRow = props => {
  const listItems = props.people
    ? props.people.map(person => <Image person={person} />)
    : null;
  return listItems;
};

class SocietyProfileImages extends Component {
  render() {
    const execs = this.props.execs;
    const reps = this.props.reps;
    return (
      <div className="society-profiles">
        <h3>{this.props.soc}</h3>
        <div>Execs</div>
        <Row className="mb-3">
          <ImageRow people={execs} />
        </Row>
        {reps && reps.length ? <div>Reps</div> : null}
        {reps && reps.length ? (
          <Row>
            <ImageRow people={reps} />
          </Row>
        ) : null}
      </div>
    );
  }
}

SocietyProfileImages.propTypes = {
  soc: PropTypes.string.isRequired,
  execs: PropTypes.arrayOf(PropTypes.object).isRequired,
  reps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocietyProfileImages;

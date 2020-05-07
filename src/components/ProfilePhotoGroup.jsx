import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, Col, Row} from "react-bootstrap";
import "./styles/ProfilePhotoGroup.scss";

const Image = props => (
  <Col xs={6} sm={6} md={6} lg={3} className="col-align-left">
    <Card className="card" style={{width: "95%"}}>
      <Card.Header
        className="card-header"
        style={{backgroundColor: props.color}}
      >
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
  color: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
};

const ImageRow = props => {
  const listItems = props.people
    ? props.people.map(person => <Image person={person} color={props.color} />)
    : null;
  return listItems;
};

class ProfilePhotoGroup extends Component {
  render() {
    const execs = this.props.execs;
    const reps = this.props.reps;
    const soc = this.props.soc;
    const color = this.props.color;
    return (
      <div className="society-profiles">
        {reps && reps.length ? (
          <>
            <h3>{soc}</h3>
            <div>Execs</div>
          </>
        ) : (
          <h3>{soc} Execs</h3>
        )}
        <Row className="mb-3">
          <ImageRow people={execs} color={color} />
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

ProfilePhotoGroup.propTypes = {
  soc: PropTypes.string.isRequired,
  execs: PropTypes.arrayOf(PropTypes.object).isRequired,
  reps: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string.isRequired,
};

export default ProfilePhotoGroup;

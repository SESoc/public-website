import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import roxane from "../assets/images/roxane.jpg";
import "./styles/ProfileImageRow.scss";

const ImageRow = props => {
  const listItems = props.people.map(person => (
    <Col xs={6} md={3} className="col-align-left">
      <Card className="card" style={{width: "100%"}}>
        <Card.Header className="card-header">
          <Card.Title className="text-center"></Card.Title>
          <Card.Text className="text-center"><strong>{person.name}</strong><br/>{person.year}<br/>{person.position}</Card.Text>
        </Card.Header>
        <Card.Img className="card-img" variant="bottom" src={person.src}/>
      </Card>
    </Col>
  ));
  return listItems;
};

const ProfileImageRow = props => (
  <Row>
    <ImageRow {...props} />
  </Row>
);

export default ProfileImageRow;

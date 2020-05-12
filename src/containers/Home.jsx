import React, {Component, Fragment} from "react";
import {Button, Container, Jumbotron, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import url from "url";
import PropTypes from "prop-types";
import EventList from "../components/EventList";
import NewsList from "../components/NewsList";
import {getEvents} from "../modules/gcal";
import "./styles/Home.scss";

const heroImage = url.resolve(
  process.env.PUBLIC_URL,
  "/illustrations/hero.png",
);
const eventCal = url.resolve(
  process.env.PUBLIC_URL,
  "/illustrations/calendar.png",
);
const coffeeChat = url.resolve(
  process.env.PUBLIC_URL,
  "/illustrations/coffee-chat.png",
);

const Hero = () => (
  <Jumbotron className="jumbotron-fluid jumbo-container">
    <img alt="Hero" className="hero-image" src={heroImage} />
    <Container className="intro-container">
      <Row>
        <Col className="mb-5 mx-3 mx-sm-0" xs={11} sm={8} md={9}>
          <h2>
            Software Engineering Society brings the SE student community
            together.
          </h2>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

const Content = props => (
  <Container>
    <Row>
      <Col md={4} className="mb-5 mx-3 mx-sm-0">
        <img
          alt="Calendar Illustration"
          src={eventCal}
          className="blurb-image"
        />
      </Col>
      <Col md={8} className="mb-5 mx-3 mx-sm-0 blurb-content">
        <h3>Missed us last time? Catch us at: </h3>
        <p> [name of next event]. Check out all upcoming events</p>
      </Col>
    </Row>
    <Row>
      <Col md={8} className="mb-5 mx-3 mx-sm-0 blurb-content">
        <h3>Curious about life in SE? Check out our latest feature: </h3>
        <p>
          SXSE S01E03: How to make the most out of your first coop. Check out
          more content
        </p>
      </Col>
      <Col md={4} className="mb-5 mx-3 mx-sm-0">
        <img
          alt="Coffee Chat Illustration"
          src={coffeeChat}
          className="pull-right img-responsive blurb-image"
        />
      </Col>
    </Row>
  </Container>
);

Content.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Home extends Component {
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
      <Fragment>
        <Hero />
        <Content events={this.state.events} />
      </Fragment>
    );
  }
}

export default Home;

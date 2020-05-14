import React, {Component, Fragment} from "react";
import {Container, Jumbotron, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import url from "url";
import PropTypes from "prop-types";
import {getEvents, upcomingEvents} from "../modules/gcal";
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
    <img alt="Hero" id="hero-image" src={heroImage} />
    <Container className="intro-container">
      <Row>
        <Col className="mb-5 mx-3 mx-sm-0" xs={11} sm={8} md={9}>
          <h2 id="intro">
            Software Engineering Society brings the SE student community
            together.
          </h2>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

const Content = props => {
  var upcomingEvent = "";
  var upcomingEventLink = "";
  if (props.events[0] && props.events[0].title && props.events[0].link) {
    upcomingEvent = props.events[0].title;
    upcomingEventLink = props.events[0].link;
  }
  return (
    <Container>
      <Row className="mb-sm-5 mx-0 mx-sm-0">
        <Col
          sm={{size: "auto", offset: 1}}
          className="blurb-content order-sm-2"
        >
          <h3>Missed us last time? Catch us at: </h3>
          <p>
            <a
              href={upcomingEventLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {upcomingEvent}
            </a>
            . Or, check out all <Link to="/events"> upcoming events </Link>
          </p>
        </Col>
        <Col sm={4} className="blurb-image-container order-sm-1">
          <img
            alt="Calendar Illustration"
            src={eventCal}
            className="blurb-image"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={7} className="mx-3 mx-sm-0 blurb-content">
          <div>
            <h3>Curious about life in SE? Check out our latest feature: </h3>
            <p>
              <a href="https://open.spotify.com/episode/24aGh1lNgFf8UPzdGGse5h?si=esEsyvC8T8Ko3fQQjc-zpA">
                SXSE S01E02 - SE FYDP: Team Mask
              </a>
            </p>
          </div>
        </Col>
        <Col sm={{size: "auto", offset: 1}} className="blurb-image-container">
          <img
            alt="Coffee Chat Illustration"
            src={coffeeChat}
            className="pull-right img-responsive blurb-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

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
        <Content events={upcomingEvents(this.state.events)} />
      </Fragment>
    );
  }
}

export default Home;

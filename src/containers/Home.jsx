import React, {Component, Fragment} from "react";
import {Button, Container, Jumbotron, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import EventList from "../components/EventList";
import NewsList from "../components/NewsList";
import {getEvents} from "../modules/gcal";
import hero from "./hero.png";

const Hero = () => (
  <Jumbotron style={{borderRadius: 0}}>
    <Container>
      <Row>
        <Col sm={8}>
          <h2>Software Engineering Society brings the SE student community together.</h2>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

const Content = props => (
  <Container>
    <Row>
      <Col sm className="mb-5 mx-3 mx-sm-0">
        <NewsList
          numEntries={3}
          articles={[
            {
              title: "Upcoming Elections",
              description: "Checkout the candidate profiles",
            },
            {
              title: "SESX S01E01",
              description: "Running a Startup as an SE Student",
            },
            {
              title: "Ibrahim: What I wish I knew in 1A",
              description: "Intro to the blog",
            },
          ]}
        />
        <Link to="/news">
          <Button variant="secondary">See Archive</Button>
        </Link>
      </Col>
      <Col sm className="mb-5 mx-3 mx-sm-0">
        <EventList events={props.events} />
        <Link to="/events">
          <Button variant="secondary">See All</Button>
        </Link>
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
        <img src="./hero.png" alt="MC, QNC, M3, DC" style={{float:"right", width:"42px", height:"42px"}}></img>
        <Content events={this.state.events} />
      </Fragment>
    );
  }
}

export default Home;

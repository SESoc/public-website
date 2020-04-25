/*
Home page for SE Society
Last Edited: Tony Zhao 2020-04-22
*/

import React, {Component, Fragment} from "react";
import {Button, Container, Jumbotron, Row, Col} from "react-bootstrap";
import EventList from "../components/EventList";
import NewsList from "../components/NewsList";

const Hero = () => (
  <Jumbotron>
    <Container>
      <Row>
        <Col sm>
          {/* <PhotoReel />
          TODO: Implement PhotoReel
         */}
        </Col>
        <Col sm>
          <h1>welcome</h1>
          <p>
            This is the official website of the UW Software Engineering Society.
            A place where we [find a collection of english words that emulate
            our desire to create events to support our program socially and
            professionally]
          </p>
          <a href="/events" style={{color:"var(--color-accent-eng)"}}>something about our latest move --&gt;</a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

const Content = () => (
  <Container>
    <Row>
      <Col sm className="mb-5">
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
        <Button variant="secondary" href="/news">
          See Archive
        </Button>
      </Col>
      <Col sm className="mb-5">
        <EventList />
        <Button variant="secondary" href="/events">
          See All
        </Button>
      </Col>
    </Row>
  </Container>
);

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Content />
      </Fragment>
    );
  }
}

export default Home;

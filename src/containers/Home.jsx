/* 
Home page for SE Society
Last Edited: Tony Zhao 2020-04-22
*/

import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import EventList from '../components/EventList/EventList';
import NewsList from '../components/NewsList';
const Hero = () => (
  <Jumbotron>
    <Row>
      <Col>
        {/* <PhotoReel />
          TODO: Implement PhotoReel
         */}
      </Col>
      <Col>
        <h1>welcome</h1>
        <p>
          This is the official website of the UW Software Engineering Society. A
          place where we [find a collection of english words that emulate our
          desire to create events to support our program socially and
          professionally]
        </p>
        <a href="/events">something about our latest move --></a>
      </Col>
    </Row>
  </Jumbotron>
);

const Content = () => (
  <Container>
    <Row>
      <Col>
        <NewsList
          numEntries={3}
          articles={[
            {
              title: 'Upcoming Elections',
              description: 'Checkout the candidate profiles',
            },
            {
              title: 'SESX S01E01',
              description: 'Running a Startup as an SE Student',
            },
            {
              title: 'Ibrahim: What I wish I knew in 1A',
              description: 'Intro to the blog',
            }
          ]}
        />
      </Col>
      <Col>
        <EventList />
      </Col>
    </Row>
  </Container>
);

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Content />
      </React.Fragment>
    );
  }
}

export default Home;

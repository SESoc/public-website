/* 
Home page for SE Society
Last Edited: Tony Zhao 2020-04-22
*/

import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

const Hero = () => (
  <Jumbotron fluid>
    <Container>
      <Row>
        <Col>{/* <PhotoReel /> */}</Col>
        <Col>
          <h1>welcome</h1>
          <p>
            This is the official website of the UW Software Engineering Society.
            A place where we [find a collection of english words that emulate
            our desire to create events to support our program socially and
            professionally]
          </p>
          <p>something about our latest move --></p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

const News = (props) => {
  //TODO: conditionally render color
  return props.articles.map((article) => (
    <li>
      <h4>{article.title}</h4>
      <p>{article.description}</p>
    </li>
  ));
};

const Events = (props) => {
  //TODO: conditionally render color
  return props.events.map((event) => (
    <li>
      <p>{event.date}</p>
      <h4>{event.title}</h4>
      <p>{event.description}</p>
    </li>
  ));
};

const Content = () => (
  <Container>
    <Row>
      <Col>
        <h1>news</h1>
        <ul>
          <News
            articles={[
              {
                title: 'Upcoming Elections',
                description: 'Checkout the candidate profiles',
              },
            ]}
          />
        </ul>
      </Col>
      <Col>
        <h1>events</h1>
        <Events
          events={[
            {
              title: 'The SE Coffee House',
              date: 'January 1, 2020',
              description:
                'Come out for a night of music, a stage full of talent and an atmosphere of good vibes only.',
            },
          ]}
        />
      </Col>
    </Row>
  </Container>
);

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Content />
      </div>
    );
  }
}

export default Home;

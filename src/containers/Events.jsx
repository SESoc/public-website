import React, { Component } from 'react'
import EventList from 'components/EventList'
import EventCalendar from 'components/EventCalendar'
import Footer from 'components/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { getEvents, filterUpcomingEvents, CALENDARS } from 'modules/gcal'
import 'App.scss'
import 'containers/styles/Events.scss'

class Events extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    getEvents(CALENDARS.SESOC, (events) => {
      this.setState({ events })
    })
  }

  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="mt-5 mb-5 flex-wrapper">
            <Row>
              <Col lg={5}>
                <EventList
                  upcomingEvents={filterUpcomingEvents(this.state.events)}
                />
              </Col>
              <Col lg={7} className="mt-5 mt-sm-0">
                <div className="cal">
                  <EventCalendar events={this.state.events} />
                </div>
                <div className="mt-3">
                  <Button
                    variant="secondary"
                    className="cal-add-btn"
                    href="https://calendar.google.com/calendar?cid=bGI2dHRiMWtzMzdxbDVyOGlzdWFzZ2NkbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                    target="_blank"
                  >
                    + Google Calendar
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </body>
        <Footer color={'purple'} />
      </div>
    )
  }
}

export default Events

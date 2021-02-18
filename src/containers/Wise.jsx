import React, { Component, useState } from 'react'
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap'
import url from 'url'
import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import PromptActionButtons from 'components/PromptActionButtons'
import EventCalendar from 'components/EventCalendar'
import { getEvents, CALENDARS } from 'modules/gcal'
import 'containers/styles/Wise.scss'

const SLACK_LINK = 'https://join.slack.com/t/uw-wise/signup'
const MAILING_LIST_LINK =
  'https://lists.uwaterloo.ca/mailman/listinfo/women-in-se'
const FACEBOOK_LINK = 'https://forms.gle/piWhPZ85zyRVCNa77'
const FEEDBACK_FORM_LINK = 'https://forms.gle/rvzrQ7X4kStmKDYh9'
const CALENDAR_LINK =
  'https://calendar.google.com/calendar/b/7?cid=dXdhdGVybG9vd2lzZUBnbWFpbC5jb20'

const girlsImage = url.resolve(
  process.env.PUBLIC_URL,
  '/illustrations/wise-girls.png',
)
const computerImage = url.resolve(
  process.env.PUBLIC_URL,
  '/illustrations/computer.png',
)
const wiseLogo = url.resolve(process.env.PUBLIC_URL, '/logos/wise-logo.png')

// TODO: use ExternalLink component on rest of site
const ExternalLink = ({ href, children, ...restProps }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
)
ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const FAQS = [
  {
    question: 'Who does WiSE support?',
    answer: (
      <p>
        WiSE recognizes women, as well as those whose gender identity is neither
        male nor female, including gender-fluid, non-binary, agender and more.
        WiSE advocates for representation of all genders in software
        engineering, and welcomes people with under-represented gender
        identities to all of our events. Additionally, some of WiSE’s events are
        open to all genders.
      </p>
    ),
  },
  {
    question: 'What does “women-only” mean?',
    answer: (
      <p>
        Our women only events are open to cis and trans women, and those whose
        gender identity is neither male nor female, including gender-fluid,
        non-binary, agender and more. We welcome people with under-represented
        gender identities to our women-only events.
      </p>
    ),
  },
  {
    question: 'What events do you run each term?',
    answer: (
      <p>
        Events vary from term to term, but in the past we have run a brunch,
        various mentoring activities, several casual board game nights, and a
        “How to get an awesome co-op” workshop. Check our our{' '}
        <a href="#wise-events">WiSE events calendar</a> below for more
        information about our upcoming events!
      </p>
    ),
  },
  {
    question: 'Why do you hold women-only events?',
    answer: (
      <div>
        <p>
          Currently, women and those with gender identities that are neither
          male nor female are under-represented in software engineering. Some
          women do not feel comfortable attending events where they know that
          the majority of attendants will be male. We hold women-only events to
          lessen this issue.
        </p>
        <p className="pt-3">
          Following in the footsteps of{' '}
          <ExternalLink href="http://wics.uwaterloo.ca/">WiCS</ExternalLink>, we
          hold women-only technical events to reduce the feeling of{' '}
          <ExternalLink href="http://geekfeminism.wikia.org/wiki/Letting_the_side_down">
            letting the side down
          </ExternalLink>
          . These women-only opportunities allow women to participate without
          the fear or making mistakes that will be interpreted as evidence that
          women are inferior at computing.
        </p>
      </div>
    ),
  },
  {
    question: 'Where can I give my feedback about WiSE?',
    answer: (
      <p>
        We love to hear feedback! You can give your feedback on our slack, or
        for an anonymous option - fill out our{' '}
        <ExternalLink href={FEEDBACK_FORM_LINK}>feedback form</ExternalLink>.
      </p>
    ),
  },
  {
    question:
      'Can you accommodate my food sensitivity at events where food is provided?',
    answer: (
      <p>
        Yes! Please try to notify us at least a week in advance of the event.
      </p>
    ),
  },
  {
    question: 'How can I get involved?',
    answer: (
      <p>
        <ExternalLink href={SLACK_LINK}>Join our slack!</ExternalLink> There you
        can chat with other WiSE, make event suggestions and volunteer to help
        run events. You can also attend our planning meeting that is held at the
        beginning of each term.
      </p>
    ),
  },
]

const Name = () => (
  <Row className="pb-5">
    <Col className="d-flex align-items-center justify-content-start justify-content-md-end">
      <img className="wise-logo" alt="WiSE logo" src={wiseLogo} />
    </Col>
    <Col className="d-flex align-items-center">
      <h1 className="m-0 pt-3 pt-md-0">
        Women in
        <br />
        Software Engineering
      </h1>
    </Col>
  </Row>
)

const WhoWeAre = () => (
  <Row>
    <Col md={12} lg={6}>
      <h2 className="pt-0 pt-md-5 pb-2">Who We Are</h2>
      <p>
        Women in Software Engineering (WiSE) is a student-run organization that
        exists to encourage, support and advocate for women and non-binary*
        individuals who are studying Software Engineering at the University of
        Waterloo.
      </p>
      <p>
        We strive to build an inclusive and diverse environment which supports
        women, non-binary, and minoritized individuals in Software Engineering.
        WiSE holds events each term to build a supportive community and provide
        a variety of resources to empower women in tech.
      </p>
      <p>*all gender identities are welcome and supported</p>
      <div className="mt-4">
        <Button
          variant="secondary"
          className="slack-btn"
          href={SLACK_LINK}
          target="_blank"
        >
          Join Our Slack
        </Button>
      </div>
    </Col>
    <Col md={12} lg={6}>
      <img alt="girls" className="girls-img pt-3 pt-md-0" src={girlsImage} />
    </Col>
  </Row>
)

const Faqs = ({ faqs }) => {
  const defaultActiveKey = '0'
  const [activeFaq, setActiveFaq] = useState(defaultActiveKey)
  return (
    <>
      <h2 className="pt-5 pb-2">FAQ</h2>
      <Accordion defaultActiveKey={defaultActiveKey} className="wise-accordian">
        {faqs.map(({ question, answer }, index) => {
          const stringIndex = index.toString()
          const isActiveFaq = activeFaq === stringIndex
          return (
            <Card className="wise-card" key={`faq-${index}`}>
              <Card.Header
                className={`wise-card-header ${isActiveFaq ? 'active' : ''}`}
              >
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={stringIndex}
                  onClick={() => setActiveFaq(stringIndex)}
                >
                  <Row className="d-flex align-items-center flex-nowrap">
                    {isActiveFaq ? (
                      <i className="fas fa-minus pr-2 mr-1" />
                    ) : (
                      <i className="fas fa-plus pr-2  mr-1" />
                    )}
                    <div className="faq-question">{question}</div>
                  </Row>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={stringIndex}>
                <Card.Body>{answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          )
        })}
      </Accordion>
    </>
  )
}

Faqs.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.node.isRequired,
    }),
  ).isRequired,
}

const Events = ({ events }) => (
  <div className="pb-5" id="wise-events">
    <h2 className="pt-5 pb-2">Events</h2>
    <div className="cal">
      <EventCalendar events={events} />
    </div>
    <div className="mt-3">
      <Button
        variant="secondary"
        className="cal-add-btn"
        href={CALENDAR_LINK}
        target="_blank"
      >
        + WiSE Google Calendar
      </Button>
    </div>
  </div>
)

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Resources = () => (
  <>
    <h2 className="pt-4 pb-2">Resources</h2>
    <p>
      For more information on events or scholarship opportunities please
      checkout our{' '}
      <a
        href="https://www.notion.so/WiSE-Resource-Hub-096fb9b198ad4cf68891847f25960a01"
        target="_blank"
        rel="noopener noreferrer"
        className="text-nowrap"
      >
        resource hub
      </a>
      .
    </p>
  </>
)

const GetInvolved = () => (
  <div className="wise-get-involved">
    <h2 className="pt-5 pb-2">Get Involved</h2>
    <PromptActionButtons
      hidePromptsOnMobile={true}
      actions={[
        {
          prompt: 'Want to continue the conversation?',
          buttonText: 'Join Our Slack',
          link: SLACK_LINK,
        },
        {
          prompt: 'Interested in attending events?',
          buttonText: 'Join Our Facebook Group',
          link: FACEBOOK_LINK,
        },
        {
          prompt: 'Stay updated?',
          buttonText: 'Join Our Mailing List',
          link: MAILING_LIST_LINK,
        },
        {
          prompt: 'Questions or concerns?',
          buttonText: 'Send Us An Email',
          link: 'mailto:uwaterloowise@gmail.com',
        },
      ]}
    />
  </div>
)

const ImageSection = ({ children }) => (
  <Row className="pt-5">
    <Col md={12} lg={8} className="pr-md-5">
      {children}
    </Col>
    <Col
      md={12}
      lg={4}
      className="d-flex align-items-center justify-content-center"
    >
      <img
        alt="computer"
        className="computer-img pt-5 pt-lg-0"
        src={computerImage}
      />
    </Col>
  </Row>
)

const Videos = () => (
  <>
    <h2 className="pt-5 pb-2">Videos</h2>
    <h4>WiSE Upper Year Panel: Fall 2020</h4>
    <div className="video-div">
      <iframe
        title="WiSE Upper Year Panel: Fall 2020"
        alt="WiSE Upper Year Panel: Fall 2020"
        src="https://drive.google.com/file/d/1ouxt001mRjDq3p1StSJ57d7wXxxBpMdC/preview"
        width="1000"
        height="670"
        allowFullScreen={true}
      />
    </div>
  </>
)

ImageSection.propTypes = { children: PropTypes.node.isRequired }

class Wise extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    getEvents(CALENDARS.WISE, (events) => {
      this.setState({ events })
    })
  }

  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="my-5 pb-4 flex-wrapper">
            <Name />
            <WhoWeAre />
            <Faqs faqs={FAQS} />
            <Videos />
            <Events events={this.state.events} />
            <ImageSection>
              <Resources />
              <GetInvolved />
            </ImageSection>
          </Container>
        </body>
        <Footer color={'pink'} />
      </div>
    )
  }
}

export default Wise

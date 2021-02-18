import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromptActionButtons from 'components/PromptActionButtons'
import Meetings from 'components/Meetings'
import url from 'url'
import Footer from 'components/Footer'
import 'containers/styles/GetInvolved.scss'

const getInvolved = url.resolve(
  process.env.PUBLIC_URL,
  '/illustrations/get-involved.png',
)

class GetInvolved extends Component {
  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="mt-5 mb-5 flex-wrapper">
            <Row>
              <Col md={6}>
                <h1>Get Involved</h1>
                <PromptActionButtons
                  actions={[
                    {
                      prompt: 'Have an event in mind?',
                      buttonText: 'Suggest an Event',
                      link: 'https://forms.gle/UJsMioSPRCo3orrQ7',
                    },
                    {
                      prompt: 'Questions or concerns?',
                      buttonText: 'Send Feedback',
                      link: 'https://forms.gle/foQJsfMmdndVRFkN7',
                    },
                    {
                      prompt: 'Contribute to the website!',
                      buttonText: 'Contribute',
                      link: 'https://github.com/SESoc/public-website/issues',
                    },
                  ]}
                />
              </Col>
              <Col md={6} className="image-get-involved-container mt-5 mb-5">
                <img
                  alt="Get Involved with SE Soc Illustration"
                  src={getInvolved}
                  className="image-get-involved"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Meetings</h1>
                <Meetings
                  meetings={[
                    {
                      type: 'upcoming',
                      title: 'TBD',
                      date: '',
                      time: '',
                      location: '',
                      link: '',
                    },
                    {
                      type: 'previous',
                      title: 'Previous Meeting',
                      date: 'Janurary 10, 2021',
                      time: '11:30am ET',
                      location: '',
                      link:
                        'https://drive.google.com/file/d/19r-zIdAoeFAWKG4AQnsiZaspHkf75Bds/preview',
                    },
                  ]}
                  archiveLink="https://drive.google.com/drive/folders/1U0IEIHzhV5oJIspB0fyf9H9zdP0w-o9t?usp=sharing"
                />
              </Col>
            </Row>
          </Container>
        </body>
        <Footer color={'pink'} />
      </div>
    )
  }
}

export default GetInvolved

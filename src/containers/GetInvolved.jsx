import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/container/council.css";
import GetInvolvedWays from "../components/GetInvolvedWays.jsx";
import Meetings from "../components/Meetings.jsx";
import url from "url";
import Footer from "../components/Footer.jsx";
import "./styles/GetInvolved.scss";

const getInvolved = url.resolve(
  process.env.PUBLIC_URL,
  "/illustrations/get-involved.png",
);

class GetInvolved extends Component {
  render() {
    return (
      <div className="footer-to-bottom">
        <body>
          <Container className="mt-5 mb-5 flex-wrapper">
            <Row>
              <Col md={6} className="mb-5">
                <h1>Get Involved</h1>
                <GetInvolvedWays
                  actions={[
                    {
                      prompt: "Have an event in mind?",
                      buttonText: "Suggest an event",
                      link: "https://github.com/SESoc/public-website/issues",
                    },
                    {
                      prompt: "Questions or concerns?",
                      buttonText: "Send Feedback",
                      link: "https://github.com/SESoc/public-website/issues",
                    },
                    {
                      prompt: "Contribute to the website!",
                      buttonText: "Contribute",
                      link: "https://github.com/SESoc/public-website/issues",
                    },
                  ]}
                />
              </Col>
              <Col md={6} className="image-get-involved-container mt-5 mt-sm-0">
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
                      type: "upcoming",
                      title: "Next Meeting",
                      date: "Monday, Sept 20th, 2020",
                      time: "6 to 8pm",
                      location: "E7 1234",
                      link:
                        "https://drive.google.com/file/d/1_e7VpiyhpUONBOlgQ_QT7i_wzgeBErCY/preview",
                    },
                    {
                      type: "previous",
                      title: "Previous Meeting",
                      date: "Monday, Sept 20th, 2020",
                      time: "6 to 8pm",
                      location: "E7 1234",
                      link:
                        "https://drive.google.com/file/d/1_e7VpiyhpUONBOlgQ_QT7i_wzgeBErCY/preview",
                    },
                  ]}
                  archiveLink="https://drive.google.com/file/d/1_e7VpiyhpUONBOlgQ_QT7i_wzgeBErCY/preview"
                />
              </Col>
            </Row>
          </Container>
        </body>
        <Footer color={"pink"} />
      </div>
    );
  }
}

export default GetInvolved;

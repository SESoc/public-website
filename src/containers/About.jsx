import React, {Component} from "react";
import {Container} from "react-bootstrap";
import SocietyProfileImages from "../components/SocietyProfileImages.jsx";
import "../assets/container/about.css";
// Images temporary ideally these will be hosted online, and we won't import from assets
import roxane from "../assets/images/roxane.jpg";
import ayush from "../assets/images/ayush.jpg";

class About extends Component {
  render() {
    return (
      <Container className="mt-5 mb-5">
        <h1>What is SE Soc?</h1>
        <p>
          Software Engineering Society (SE Soc) is a council that runs community
          initiatives within the SE program. We give you a better shot at the
          jobs you want by hosting resume critiques and interview prep sessions.
          We build a sense of community by organizing class dinners and social
          events. We introduce you to upper-years and lower-years by matching
          you with someone to chat over coffee. We highlight the cool stuff that
          everyone in SE is up to by producing our podcast, Sessions by SE.
        </p>
        <h1>Meet The Team</h1>
        <p>
          B-Soc represents the odd years (SE2021, SE2023, etc.) and A-Soc
          represents the even years (SE2020, SE2022, etc.). We’re a friendly
          bunch, feel free to say hi if we ever bump into each other on campus!
        </p>
        <SocietyProfileImages
          soc={"B Soc"}
          execs={[
            {
              name: "Roxane Fruytier",
              src: roxane,
              year: "2021",
              position: "President",
            },
            {
              name: "Elisa Luan",
              src: roxane,
              year: "2021",
              position: "VP Events",
            },
            {
              name: "Mayank Kanoria",
              src: roxane,
              year: "2021",
              position: "VP Finance",
            },
            {
              name: "Jenny Wills",
              src: roxane,
              year: "2021",
              position: "VP Communications",
            },
          ]}
          reps={[]}
        />
        <SocietyProfileImages
          soc={"A Soc"}
          execs={[
            {
              name: "Yingning Gui",
              src: ayush,
              year: "2022",
              position: "President",
            },
            {
              name: "Alex Girard",
              src: ayush,
              year: "2022",
              position: "VP Events",
            },
            {
              name: "Han Xiao",
              src: ayush,
              year: "2022",
              position: "VP Finance",
            },
            {
              name: "Robbie Zhuang",
              src: ayush,
              year: "2022",
              position: "VP Communications",
            },
          ]}
          reps={[
            {name: "Aaron Abraham", src: roxane, year: "2024"},
            {name: "Olivia Misasi", src: roxane, year: "2024"},
            {name: "Danny Wu", src: roxane, year: "2024"},
            {name: "Amolik Singh", src: roxane, year: "2022"},
            {name: "Harry Tong", src: roxane, year: "2022"},
          ]}
        />
      </Container>
    );
  }
}

export default About;

import React, {Component, Fragment} from "react";
import {Container} from "react-bootstrap";
import ProfilePhotoGroup from "../components/ProfilePhotoGroup.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/container/about.css";
import url from "url";

const profileImage = name =>
  url.resolve(process.env.PUBLIC_URL, `/profiles/${name}.jpg`);

class About extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5 mb-5">
          <h1>What is SE Soc?</h1>
          <p>
            Software Engineering Society (SE Soc) is a council that runs
            community initiatives within the SE program. We give you a better
            shot at the jobs you want by hosting resume critiques and interview
            prep sessions. We build a sense of community by organizing class
            dinners and social events. We introduce you to upper-years and
            lower-years by matching you with someone to chat over coffee. We
            highlight the cool stuff that everyone in SE is up to by producing
            our podcast, Sessions by SE.
          </p>
          <Container className="mt-4 pl-0">
            <h1>Meet The Team</h1>
            <p>
              B-Soc represents the odd years (SE2021, SE2023, etc.) and A-Soc
              represents the even years (SE2020, SE2022, etc.). We’re a friendly
              bunch, feel free to say hi if we ever bump into each other on
              campus!
            </p>
            <ProfilePhotoGroup
              soc={"B-Soc"}
              execs={[
                {
                  name: "Roxane Fruytier",
                  src: profileImage("roxane"),
                  year: "2021",
                  position: "President",
                },
                {
                  name: "Elisa Luan",
                  src: profileImage("elisa"),
                  year: "2023",
                  position: "VP Events",
                },
                {
                  name: "Mayank Kanoria",
                  src: profileImage("mayank"),
                  year: "2023",
                  position: "VP Finance",
                },
                {
                  name: "Jenny Wills",
                  src: profileImage("jenny"),
                  year: "2021",
                  position: "VP Communications",
                },
              ]}
              reps={[]}
              color={"var(--color-math)"}
            />
            <ProfilePhotoGroup
              soc={"A-Soc"}
              execs={[
                {
                  name: "Yingning Gui",
                  src: profileImage("yingning"),
                  year: "2022",
                  position: "President",
                },
                {
                  name: "Alex Girard",
                  src: profileImage("alex"),
                  year: "2022",
                  position: "VP Events",
                },
                {
                  name: "Han Xiao",
                  src: profileImage("han"),
                  year: "2022",
                  position: "VP Finance",
                },
                {
                  name: "Robbie Zhuang",
                  src: profileImage("robbie"),
                  year: "2022",
                  position: "VP Communications",
                },
              ]}
              reps={[]}
              color={"var(--color-eng)"}
            />
          </Container>
        </Container>
        <Footer color={"var(--color-math)"} />
      </Fragment>
    );
  }
}

export default About;

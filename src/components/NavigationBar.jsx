import React from "react";
import url from "url";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, useLocation} from "react-router-dom";
import "./styles/NavigationBar.scss";

const logo = url.resolve(
  process.env.PUBLIC_URL,
  "/logos/se-logo-trimmed-transparent-bw.png",
);

const NavigationBar = props => {
  let location = useLocation();
  let color = "";
  switch (location.pathname) {
  case "/":
    color = "#F0EDF1";
    break;
  default:
    color = "transparent";
    break;
  }

  return (
    <Navbar expand="sm" collapseOnSelect style={{backgroundColor: color}}>
      <Container className="mx-3 mx-sm-auto">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="40"
            className="d-inline-block align-top"
            alt="SE Society"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              className="mr-4"
              exact
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              className="mr-4"
              exact
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              className="mr-4"
              exact
              to="/events"
            >
              Events
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Props from withRouter HOC
NavigationBar.propTypes = {};

export default NavigationBar;

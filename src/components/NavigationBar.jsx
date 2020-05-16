import React from "react";
import url from 'url';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "./styles/NavigationBar.css";

const logo = url.resolve(process.env.PUBLIC_URL, "/icons/se-logo-trimmed.png");

const NavigationBar = () => (
  <Navbar bg="transparent" expand="sm" collapseOnSelect >
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="30"
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
            to="/">
          home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            className="mr-4"
            exact
            to="/events"
          >
          events
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            className="mr-4"
            exact
            to="/news">
          news
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            className="mr-4"
            exact
            to="/council"
          >
          council
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            activeClassName="active"
            className="mr-4"
            exact
            to="/about">
            about
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;

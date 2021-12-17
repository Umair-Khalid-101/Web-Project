import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router";
const NavBar = () => {
  const history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img
          src="appicon.svg"
          alt="name"
          style={{ width: "50px", marginRight: "20px" }}
        />
        <button className="btn btn-light" onClick={() => history.push("/")}>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <button
              className="btn btn-light"
              onClick={() => history.push("/Products")}
            >
              <Nav.Link className="fs-5">Products</Nav.Link>
            </button>
            <button
              className="btn btn-light"
              onClick={() => history.push("/SignUp")}
            >
              <Nav.Link className="fs-5">SignUP</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

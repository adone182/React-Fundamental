import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";

const Navigation = () => {
  return(
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">DonesCobain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Images</Nav.Link>
            <Nav.Link href="#link">Posting</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation;
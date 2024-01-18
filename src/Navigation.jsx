import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

export default function Navigation() {
  return (
    <Navbar fixed="top" className="mb-3">
      <Container id="nav-container">
        <Nav className="me-auto">
          <Navbar.Brand>
            <img src="personal_pic.JPG" width="30" />
          </Navbar.Brand>
          {/* <Nav.Link as="li" className="mx-3" href="#home">
            Home
          </Nav.Link>
          <Nav.Link as="li" className="mx-3" href="#link">
            About
          </Nav.Link>
          <Nav.Link as="li" className="mx-3" href="#home">
            Project
          </Nav.Link>
          <Nav.Link as="li" className="mx-3" href="#link">
            Contact
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

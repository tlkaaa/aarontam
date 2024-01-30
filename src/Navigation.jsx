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
            <img src="public/personal_pic.JPG" width="30" />
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

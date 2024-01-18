import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";

export default function Content() {
  return (
    <>
      <Container id="main-container" align="center">
        <Row className="row-cols-1">
          <Col align="left">
            <img src="./src/logo.jpg" width="100" id="content-logo" />
          </Col>
          <Col className="mt-4" align="left">
            <h4>Aaron Tam</h4>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3" align="left">
            <span>About me</span> <br />
          </Col>
        </Row>
        <Row className="mt-1 row-cols-1">
          <Col className="mt-2" align="left">
            <p>
              Hello, I am Aaron. I enjoy learning new things and love
              challenges. I find joy in the pursuit of knowledge and thrive on
              the challenges that come with acquiring new skills. Always open to
              new experiences.
            </p>
          </Col>
          <Col align="left">
            <p>
              For the last 3 years, I've honed my skills in web development,
              databases, and software engineering. I've crafted web apps, delved
              into backend work, managed databases, and explored machine
              learning. Now, I'm eager to take on new challenges and keep
              growing. Open to opportunities that push me further.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

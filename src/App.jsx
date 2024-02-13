import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Container id="main-container" align="center">
        <Row className="row-cols-1">
          <Col className="mt-5 name" align="left">
            <h4>Aaron Tam</h4>
          </Col>
        </Row>
        <Row className="main-content">
          <Col className="mt-4" align="left">
            <span>About me</span> <br />
          </Col>
        </Row>
        <Row className="mt-2 row-cols-1 main-content">
          <Col className="mt-3" align="left">
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
        <Row className="mt-4 main-project">
          <Col align="left">
            <span>Projects</span>
          </Col>
        </Row>
        <Row className="row-cols-1 main-project">
          <Col className="card-col">
            <Card
              bg="dark"
              text="white"
              align="left"
              className="mt-3 z-0 border-0"
            >
              <Card.Body>
                <p className="ms-4 mb-4">Advice Slip</p>
                <Card.Img
                  className="px-4"
                  variant="top"
                  src="advice_slip.PNG"
                />
                <Card.Text className="pt-4 px-4">
                  Generate random advice slips or search advice slips with
                  keywords or ID.
                </Card.Text>
                <div className="px-4">
                  <div className="logo-text mt-2">React</div>
                  <img
                    src="react.PNG"
                    className="icons"
                    width="35"
                    title="React"
                  />
                  <div className="logo-text-xs ms-1" align="center">
                    Type
                    <br />
                    Script
                  </div>
                  <img
                    src="typescript.PNG"
                    className="icons"
                    width="35"
                    title="TypeScript"
                  />
                  <div className="logo-text-xs ms-2" align="center">
                    Boot
                    <br />
                    strap
                  </div>
                  <img
                    src="bootstrap.PNG"
                    className="icons"
                    width="43"
                    title="Bootstrap"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    className="link-button"
                    href="https://tlkaaa.github.io/advice-slip/"
                    target="_blank"
                    variant="link"
                  >
                    Visit Site↗
                  </Button>
                  <Button
                    className="link-button"
                    href="https://github.com/tlkaaa/advice-slip"
                    target="_blank"
                    variant="link"
                  >
                    GitHub Repository↗
                  </Button>
                  <Button className="link-button" variant="link">
                    <Link
                      className="link-button"
                      to="/aarontam/learnmore/adviceslip"
                    >
                      Learn More
                    </Link>
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              text="white"
              align="left"
              className="mt-3 z-0 border-0"
            >
              <Card.Body>
                <p className="ms-4">Fire Evacuation Simulation</p>
                <Card.Img className="px-4" variant="top" src="fire_evac.PNG" />
                <Card.Text className="pt-4 px-4">
                  Simulation of a fire evacuation situation in a stadium for
                  event organizers.
                </Card.Text>
                <div className="px-4">
                  <div className="logo-text mt-2 ms-1">Unity</div>
                  <img
                    src="unity.PNG"
                    className="icons"
                    width="35"
                    title="Unity"
                  />
                  <div className="logo-text mt-2 ms-2">C#</div>
                  <img
                    src="c-sharp.PNG"
                    className="icons"
                    width="35"
                    title="C#"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    className="link-button"
                    href="https://tlkaaa.itch.io/project"
                    target="_blank"
                    variant="link"
                  >
                    Visit Demo↗
                  </Button>
                  <Button className="link-button" variant="link">
                    <Link
                      className="link-button"
                      to="/aarontam/learnmore/fire-evacuation-situation"
                    >
                      Learn More
                    </Link>
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              text="white"
              align="left"
              className="mt-3 z-0 border-0"
            >
              <Card.Body>
                <p className="ms-4">Tech</p>
                <Card.Img className="px-4" variant="top" src="tech.PNG" />
                <Card.Text className="pt-4 px-4">
                  A made-up Technology Company's website showcasing their range
                  of product.
                </Card.Text>
                <div className="px-4">
                  <div className="logo-text mt-2">HTML</div>
                  <img
                    src="html.PNG"
                    className="icons"
                    width="35"
                    title="HTML"
                  />
                  <div className="logo-text mt-2 ms-1">CSS</div>
                  <img src="css.PNG" className="icons" width="35" title="CSS" />
                  <div className="logo-text-xs ms-1" align="center">
                    Java
                    <br />
                    Script
                  </div>
                  <img
                    src="javascript.PNG"
                    className="icons"
                    width="35"
                    title="JavaScript"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    className="link-button"
                    href="https://tlkaaa.github.io/Tech/"
                    target="_blank"
                    variant="link"
                  >
                    Visit Site↗
                  </Button>
                  <Button
                    className="link-button"
                    href="https://github.com/tlkaaa/tech"
                    target="_blank"
                    variant="link"
                  >
                    GitHub Repository↗
                  </Button>
                  <Button className="link-button" variant="link">
                    <Link className="link-button" to="/aarontam/learnmore/tech">
                      Learn More
                    </Link>
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              text="white"
              align="left"
              className="mt-3 z-0 border-0 mb-4"
            >
              <Card.Body>
                <p className="ms-4">
                  <em>Ongoing Project (2024 Feb):</em> Simple Log-In Page
                </p>
                <Card.Text className="pt-2 px-4">
                  A simple login page built with Docker technology, allowing
                  users to create and login their accounts.
                </Card.Text>
                <div className="px-4">
                  <div className="logo-text mt-2">React</div>
                  <img
                    src="react.PNG"
                    className="icons"
                    width="35"
                    title="React"
                  />
                  <div className="logo-text-xs ms-1" align="center">
                    Type
                    <br />
                    Script
                  </div>
                  <img
                    src="typescript.PNG"
                    className="icons"
                    width="35"
                    title="TypeScript"
                  />
                  <div className="logo-text-xs ms-2" align="center">
                    Boot
                    <br />
                    strap
                  </div>
                  <img
                    src="bootstrap.PNG"
                    className="icons"
                    width="43"
                    title="Bootstrap"
                  />
                  <div className="logo-text-xs mt-2 ms-1">Docker</div>
                  <img
                    src="docker.PNG"
                    className="icons"
                    width="40"
                    title="Docker"
                  />
                  <div className="logo-text-xs mt-2 ms-1">MySQL</div>
                  <img
                    src="mysql.PNG"
                    className="icons"
                    width="40"
                    title="MySQL"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-cols-1 main-contact" align="left">
          <Col className="mb-4">
            <span>Contacts</span>
          </Col>
          <Col>
            <p>
              Email <img src="email.PNG" width={20} alt="Email" />{" "}
              aarontam9529@gmail.com
            </p>
          </Col>
          <Col>
            <p>
              GitHub <img src="github.PNG" width={20} alt="GitHub" />{" "}
              <a
                className="link"
                href="https://github.com/tlkaaa"
                target="_blank"
              >
                github.com/tlkaaa ↗
              </a>
            </p>
          </Col>
          <Col>
            <p>
              LinkedIn <img src="linkedin.PNG" width={20} alt="LinkedIn" />{" "}
              <a
                className="link"
                href="https://www.linkedin.com/in/aarontamlk/"
                target="_blank"
              >
                www.linkedin.com/in/aarontamlk ↗
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

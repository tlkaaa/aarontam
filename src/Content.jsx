import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Content() {
  const [logoPosition, setLogoPosition] = useState("offset-0");
  const [logoSize, setLogoSize] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 70) {
        setLogoPosition(`offset-0`);
        setLogoSize(100);
      }
      if (window.scrollY > 70) {
        setLogoPosition(`offset-11`);
        setLogoSize(30);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoPosition]);

  return (
    <>
      <Container className="logo" id="logo-container">
        <Row>
          <Col>
            <img
              className={logoPosition}
              src="personal_pic.JPG"
              width={logoSize}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </Col>
        </Row>
      </Container>

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
        <Row className="row-cols-1 mt-4 main-project">
          <Col className="card-col">
            <Card bg="dark" text="white" align="left" className="mt-3 mb-5 z-0">
              <Card.Header className="ms-4 z-0">Advice Slip</Card.Header>
              <Card.Body>
                <Card.Img
                  className="p-4 z-0"
                  variant="top"
                  src="advice_slip.PNG"
                />
                <Card.Text className="px-4 z-0">
                  Generate random advice slips or search advice slips with
                  keywords or ID.
                </Card.Text>
                <div className="px-4">
                  <img
                    src="react.PNG"
                    className="icons"
                    width="35"
                    title="React"
                  />
                  <img
                    src="typescript.PNG"
                    className="icons"
                    width="35"
                    title="TypeScript"
                  />
                  <img
                    src="bootstrap.PNG"
                    className="icons"
                    width="43"
                    title="Bootstrap"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    href="https://tlkaaa.github.io/advice-slip/"
                    target="_blank"
                    variant="link"
                  >
                    Visit Site↗
                  </Button>
                  <Button
                    href="https://github.com/tlkaaa/advice-slip"
                    target="_blank"
                    variant="link"
                  >
                    GitHub Repository↗
                  </Button>
                  {/* <Button variant="outline-secondary">Learn More</Button> */}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="white" align="left" className="mt-3 mb-5">
              <Card.Header className="ms-4">
                Fire Evacuation Simulation
              </Card.Header>
              <Card.Body>
                <Card.Img className="p-4" variant="top" src="fire_evac.PNG" />
                <Card.Text className="px-4">
                  Simulation of a fire evacuation situation in a stadium for
                  event organizers.
                </Card.Text>
                <div className="px-4">
                  <img
                    src="unity.PNG"
                    className="icons"
                    width="35"
                    title="Unity"
                  />
                  <img
                    src="c-sharp.PNG"
                    className="icons"
                    width="35"
                    title="C#"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    href="https://tlkaaa.itch.io/project"
                    target="_blank"
                    variant="link"
                  >
                    Visit Demo↗
                  </Button>
                  {/* <Button variant="outline-secondary">Learn More</Button> */}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="white" align="left" className="mt-3 mb-5">
              <Card.Header className="ms-4">Tech</Card.Header>
              <Card.Body>
                <Card.Img className="p-4" variant="top" src="tech.PNG" />
                <Card.Text className="px-4">
                  A made-up Technology Company's website showcasing their range
                  of product.
                </Card.Text>
                <div className="px-4">
                  <img
                    src="html.PNG"
                    className="icons"
                    width="35"
                    title="HTML"
                  />
                  <img src="css.PNG" className="icons" width="35" title="CSS" />
                  <img
                    src="javascript.PNG"
                    className="icons"
                    width="35"
                    title="JavaScript"
                  />
                </div>
                <ButtonGroup className="m-3">
                  <Button
                    href="https://tlkaaa.github.io/Tech/"
                    target="_blank"
                    variant="link"
                  >
                    Visit Site↗
                  </Button>
                  <Button
                    href="https://github.com/tlkaaa/tech"
                    target="_blank"
                    variant="link"
                  >
                    GitHub Repository↗
                  </Button>
                  {/* <Button variant="outline-secondary">Learn More</Button> */}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

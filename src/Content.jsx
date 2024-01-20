import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          <Col className={logoPosition}>
            <img
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
              growing. Open to opportunities that push me further. /////////////
              For the last 3 years, I've honed my skills in web development,
              databases, and software engineering. I've crafted web apps, delved
              into backend work, managed databases, and explored machine
              learning. Now, I'm eager to take on new challenges and keep
              growing. Open to opportunities that push me further. For the last
              3 years, I've honed my skills in web development, databases, and
              software engineering. I've crafted web apps, delved into backend
              work, managed databases, and explored machine learning. Now, I'm
              eager to take on new challenges and keep growing. Open to
              opportunities that push me further. For the last 3 years, I've
              honed my skills in web development, databases, and software
              engineering. I've crafted web apps, delved into backend work,
              managed databases, and explored machine learning. Now, I'm eager
              to take on new challenges and keep growing. Open to opportunities
              that push me further. For the last 3 years, I've honed my skills
              in web development, databases, and software engineering. I've
              crafted web apps, delved into backend work, managed databases, and
              explored machine learning. Now, I'm eager to take on new
              challenges and keep growing. Open to opportunities that push me
              further. For the last 3 years, I've honed my skills in web
              development, databases, and software engineering. I've crafted web
              apps, delved into backend work, managed databases, and explored
              machine learning. Now, I'm eager to take on new challenges and
              keep growing. Open to opportunities that push me further. For the
              last 3 years, I've honed my skills in web development, databases,
              and software engineering. I've crafted web apps, delved into
              backend work, managed databases, and explored machine learning.
              Now, I'm eager to take on new challenges and keep growing. Open to
              opportunities that push me further. For the last 3 years, I've
              honed my skills in web development, databases, and software
              engineering. I've crafted web apps, delved into backend work,
              managed databases, and explored machine learning. Now, I'm eager
              to take on new challenges and keep growing. Open to opportunities
              that push me further. For the last 3 years, I've honed my skills
              in web development, databases, and software engineering. I've
              crafted web apps, delved into backend work, managed databases, and
              explored machine learning. Now, I'm eager to take on new
              challenges and keep growing. Open to opportunities that push me
              further. For the last 3 years, I've honed my skills in web
              development, databases, and software engineering. I've crafted web
              apps, delved into backend work, managed databases, and explored
              machine learning. Now, I'm eager to take on new challenges and
              keep growing. Open to opportunities that push me further.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

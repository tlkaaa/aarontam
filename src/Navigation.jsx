import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import { useEffect, useState } from "react";

export default function Navigation() {
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
  );
}

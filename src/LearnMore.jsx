import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles.css";
import { useEffect, useState } from "react";
import AdviceSlip from "./AdviceSlip";
import Tech from "./Tech";
import FireEvac from "./FireEvac";

export default function LearnMore() {
  const param = useParams();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (param.project == "adviceslip") {
      setTitle("Advice Slip");
      setContent(<AdviceSlip />);
    } else if (param.project == "fire-evacuation-situation") {
      setTitle("Fire Evacuation Situation");
      setContent(<FireEvac />);
    } else {
      setTitle("Tech");
      setContent(<Tech />);
    }
  }, []);

  return (
    <Container id="learnmore-container" align="center">
      <Row className="row-cols-1" align="left">
        <Col className="mt-5" align="left">
          <Button className="back-button" variant="link">
            <Link className="back-button" to="/aarontam/">
              <img src={`/aarontam/left_arrow.PNG`} width={25} />
            </Link>
          </Button>
        </Col>
        <Col className="mt-3 name" align="left">
          <h4>{title}</h4>
        </Col>
        <Col className="mt-3 main-content">{content}</Col>
      </Row>
    </Container>
  );
}

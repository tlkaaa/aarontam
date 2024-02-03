import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./styles.css";

export default function Tech() {
  return (
    <>
      <Col>
        <p>
          A made-up Technology Company's website showcasing their range of
          product.
        </p>
        <p>
          <em>HTML • CSS • JavaScript</em>
        </p>
      </Col>
      <Col>
        <Carousel
          className="my-5"
          indicators={false}
          data-bs-theme="dark"
          interval={5000}
        >
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/tech.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/tech_1.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/tech_2.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/tech_3.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/tech_4.PNG" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <p>
          TECH was the first ever website build by myself during early 2022 with
          the mind of using Nielsen’s ten Usability Heuristics, my early
          exposure in web development. During this project, I have encountered a
          lot of difficulties on the some of the basic syntax and logic. Through
          countless hours of learning through errors and research, I have
          finally created my first ever functional website. I know this is just
          the beginning of my journey as there are much to learn for me to grow.
          I am always ready to accept challenges and willing to learn new
          things.
        </p>
      </Col>
      <Col className="col-12 mt-4 mb-5 d-flex justify-content-center">
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
      </Col>
    </>
  );
}

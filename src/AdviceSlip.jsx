import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./styles.css";

export default function AdviceSlip() {
  return (
    <>
      <Col>
        <p>
          Generate random advice slips or search advice slips with keywords or
          ID.
        </p>
        <p>
          <em>
            React • TypeScript • React-Bootstrap •{" "}
            <a href="https://api.adviceslip.com/" target="_blank">
              Advice Slip JSON API↗
            </a>
          </em>
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
            <img className="caro-image" src="/aarontam/advice_slip.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/advice_slip_1.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/advice_slip_2.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/advice_slip_3.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/advice_slip_4.PNG" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <p>
          This project was build with the mind of Project Based Learning,
          learning through trials and error to understand the concept of React
          as well as TypeScript. Even it was the first time using both
          technologies, I am able to learn the basics quickly and able to build
          a fully functional React app with TypeScript within 2 weeks.
        </p>
        <p>
          The main challenge for this project was to think in React, which was
          quite different from using HTML, CSS and Js as React uses components
          which HTML uses a top-down approach. Also, I was struggling with the
          syntax of TypeScript at first as there are more rules and
          requirements.
        </p>
        <p>
          I'm eager to dive deeper into React through building more complex
          project and learn more about different best practices using React. I'm
          ready to embrace the challenges and opportunities that come with
          learning React, and also to see how it can elevate my skills as a
          developer.
        </p>
      </Col>
      <Col className="col-12 mt-4 mb-5 d-flex justify-content-center">
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
      </Col>
    </>
  );
}

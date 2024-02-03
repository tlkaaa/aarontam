import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./styles.css";

export default function FireEvac() {
  return (
    <>
      <Col>
        <p>
          Simulation of a fire evacuation situation in a stadium for event
          organizers.
        </p>
        <p>
          <em>Unity • C#</em>
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
            <img className="caro-image" src="/aarontam/fire_evac.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/fire_evac_1.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/fire_evac_2.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/fire_evac_3.PNG" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="caro-image" src="/aarontam/fire_evac_4.PNG" />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <p>
          This project was a group work during one of the studio courses in my
          master’s degree. The goal of the project was to create a simulation of
          fire evacuation in a large sporting stadium for large sporting event
          organizers. Since my other teammates was from a design degree, their
          roles were to create various 3D models for the simulation whereas my
          role was to program the logic of the simulation using the model they
          provided in Unity with C#.
        </p>
        <p>
          The project provided me the experiences of working in a team-based
          environment where design and implementation parties have to work
          together and communicate in order to understand each other goals as
          well as difficulties. From this project, I have learnt that working as
          a team was crucial in team works especially in this industry.
        </p>
        <p>
          This was the first time I am using Unity as well as C#, also since it
          was a course work, I have less than 8 weeks to learn everything from
          scratch and implement the simulation. At first, it may seem impossible
          to complete all the task as I have no idea on where to start. However,
          after research and a lot of testing, I have learnt the basics of Unity
          and C# and started implementing and learning simultaneously on the go.
        </p>
        <p>
          The ability to adapt changes was the main skills I have learned from
          this project as everything I have done in this project was my first
          time. With no prior experience with all of those, I still have to
          overcome all of the challenges and adapt to the situation at hand.
          Even I have learnt just enough Unity and C# for the project
          implementation, but the lesson learnt from this experience was the
          most important.
        </p>
      </Col>
      <Col className="col-12 mt-4 mb-5 d-flex justify-content-center">
        <Button
          className="link-button"
          href="https://tlkaaa.itch.io/project"
          target="_blank"
          variant="link"
        >
          Visit Demo↗
        </Button>
      </Col>
    </>
  );
}

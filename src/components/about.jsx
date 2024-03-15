import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "../css/about.css";

const About = () => {
  const iconStyle = {
    fontSize: "100px",
    color: "#000",
  };
  return (
    <Container id="about" className="py-5">
      <div className="row text-center bg-light py-5">
        <h2 className="text-start"> &lt; about_me /&gt;</h2>
        <div className="text-center col-lg-8" id="aboutMe">
          <p>
            My name is Ismail Babalola. I am Originally from Lagos Nigeria, I
            moved to the UK in 2010. I graduated from Kingston University with a
            bachelor degree in Aerospace Engineering. I have since then moved to
            the bootcamp in Frontend Development provided by Edx University of
            Birmingham to learn more about frontend web development. I want to
            further develop my skills and knowledge in Javascript and React and
            I hope to fully get into the industry in the near future.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="https://avatars.githubusercontent.com/u/139620500?v=4"
            alt="my image"
            className="img rounded"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>

      <div id="techStack" className="mt-5 bg-info py-5">
        <h1 className="text-center"> &lt; Skills /&gt;</h1>
        <div className="icon-container">
          <div>
            <FontAwesomeIcon
              icon={faHtml5}
              style={iconStyle}
              className="tech-icon"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={iconStyle}
              className="tech-icon"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBootstrap}
              style={iconStyle}
              className="tech-icon"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faJs}
              style={iconStyle}
              className="tech-icon"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faReact}
              style={iconStyle}
              className="tech-icon"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
